
import { Injectable } from '@nestjs/common'

import * as puppeteer from 'puppeteer'

@Injectable()
export class HotelsService {

  async search() {
    const checkInDate = '05022019'
    const checkOutDate = '27022019'
    let requestUrl = `https://myreservations.omnibees.com/chain.aspx?c=2983&lang=pt-BR&ad=2&_ga=2.171262688.1724825935.1549395965-1084404608.1549395965&version=MyReservation&sid=ab4a7cf1-3efe-4a27-954f-cf84dfe8a4f3#/hotel=&hotelname=&CheckIn=${checkInDate}&CheckOut=${checkOutDate}&Code=&group_code=&loyality_card=&NRooms=1&ad=2&ch=0&ag=-`
    
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(requestUrl)

    // code for scraping

    await browser.close()

    return {};
  }
  
}
