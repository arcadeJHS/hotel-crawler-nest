import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';

@Module({
  imports: [],
  controllers: [AppController, HotelsController],
  providers: [AppService, HotelsService],
})
export class AppModule {}
