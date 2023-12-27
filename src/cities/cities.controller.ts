import { Controller, Get, Param } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  findAll() {
    return this.citiesService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.citiesService.findOne(slug);
  }

  @Get('region/:region')
  findByRegion(@Param('region') region: string) {
    return this.citiesService.findByRegion(region);
  }
}
