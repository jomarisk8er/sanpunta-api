import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { DbModule } from '../db/db.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [DbModule],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
