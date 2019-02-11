
import { Injectable } from '@nestjs/common'

import * as puppeteer from 'puppeteer'

import { SearchHotelsDto } from './search-hotels.dto'

@Injectable()
export class HotelsService {

  async search(searchHotelsDto: SearchHotelsDto) {
    const checkInDate = searchHotelsDto.checkIn.replace('/', '')
    const checkOutDate = searchHotelsDto.checkOut.replace('/', '')
    
    let requestUrl = this.searchReservationsLecanton(checkInDate, checkOutDate)
    
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    await page.setRequestInterception(true)
    
    // disable images and css while scraping
    page.on('request', (req) => {
      if(req.resourceType() == 'stylesheet' || req.resourceType() == 'font' 
        || req.resourceType() == 'image') {
        req.abort()
      } else {
        req.continue()
      }
    })

    await page.goto(requestUrl, { waitLoad: true, waitNetworkIdle: true })
    await page.waitForSelector('div.entries > div.entry.available')

    const hotelsLinks = await page.evaluate(() => {
      let links = [];
      let hotelsElements = document.querySelectorAll('div.entries > div.entry.available')

      hotelsElements.forEach((hotelElement) => {
        const el = <HTMLAnchorElement> hotelElement.querySelector('div.description h5 a.stars_0')
        links.push(el.href)
      });

      return links;
    })

    let hotelsData = []

    for (let i = 0; i < hotelsLinks.length; i ++) {
      await page.goto(hotelsLinks[i], { waitLoad: true, waitNetworkIdle: true })
      await page.waitForSelector('div.roomExcerpt')
      await page.waitFor(1000)

      let hotelData = await page.evaluate(() => {
        const containerEl = document.querySelector('div.roomExcerpt')
        
        const name = containerEl.querySelector('div.excerpt h5 a').textContent
        const description = containerEl.querySelector('div.excerpt p a.description').textContent

        const priceElement = <HTMLElement> containerEl.querySelector('div.sincePrice.bestPriceBackgroundColor.bestPriceTextColor > div.sincePriceContent')
        const imageElement = <HTMLAnchorElement> containerEl.querySelector('div.roomSlider a.fancybox-thumbs')
        
        return { 
          name, 
          description, 
          price: priceElement.innerText, 
          image: imageElement.href 
        };
      });

      hotelsData.push(hotelData)
    }

    await browser.close()

    return {hotelsData};
  }

  searchReservationsLecanton(checkInDate: string, checkOutDate: string) {
    return [
      'https://myreservations.omnibees.com/chain.aspx?c=2983&lang=pt-BR&ad=2',
      '&_ga=2.171262688.1724825935.1549395965-1084404608.1549395965',
      '&version=MyReservation&sid=ab4a7cf1-3efe-4a27-954f-cf84dfe8a4f3#/hotel=&hotelname=',
      `&CheckIn=${checkInDate}&CheckOut=${checkOutDate}`,
      '&Code=&group_code=&loyality_card=&NRooms=1&ad=2&ch=0&ag=-',
    ].join('');
  }

}
