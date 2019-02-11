
import { Controller, Post, Body, Get } from '@nestjs/common'
import { HotelsService } from './hotels.service'
import { SearchHotelsDto } from './search-hotels.dto'

@Controller('hotels')
export class HotelsController {
  
  constructor(private readonly hotelsService: HotelsService) {}

  @Post('buscar')
  search(@Body() searchHotelsDto: SearchHotelsDto) {
    return this.hotelsService.search(searchHotelsDto)
  }

}
