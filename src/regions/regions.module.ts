import { DbModule } from 'src/db/db.module';
import { Module } from '@nestjs/common';
import { RegionsController } from './regions.controller';
import { RegionsService } from './regions.service';

@Module({
  imports: [DbModule],
  controllers: [RegionsController],
  providers: [RegionsService],
})
export class RegionsModule {}
