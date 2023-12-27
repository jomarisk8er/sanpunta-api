import { Controller, Get, Post, Param } from '@nestjs/common';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post()
  @Get()
  findAll() {
    return this.storesService.findAll();
  }

  @Get('/category_and_city/:category/:city')
  findByCategoryAndCity(
    @Param('category') category: string,
    @Param('city') city: string,
  ) {
    return this.storesService.findByCategoryAndCity(category, city);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.storesService.findOne(slug);
  }
}
