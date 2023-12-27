import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { CitiesModule } from './cities/cities.module';
import { DbModule } from './db/db.module';
import { Module } from '@nestjs/common';
import { RegionsModule } from './regions/regions.module';
import { ReviewsModule } from './reviews/reviews.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [
    CategoriesModule,
    CitiesModule,
    ReviewsModule,
    StoresModule,
    DbModule,
    RegionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
