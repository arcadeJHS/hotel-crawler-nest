
import { Controller, Post, Body, Get } from '@nestjs/common'
import { HotelsService } from './hotels.service'

@Controller('hotels')
export class HotelsController {
  
  constructor(private readonly hotelsService: HotelsService) {}

  @Post('buscar')
  search(@Body() searchHotelsDto) {
    return this.hotelsService.search();
  }

}
