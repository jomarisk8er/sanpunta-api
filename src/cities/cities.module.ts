import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { DbModule } from 'src/db/db.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DbModule],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
