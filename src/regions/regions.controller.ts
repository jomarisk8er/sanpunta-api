import { Controller, Get, Param } from '@nestjs/common';
import { RegionsService } from './regions.service';

@Controller('regions')
export class RegionsController {
  constructor(private readonly regionsService: RegionsService) {}
  @Get()
  findAll() {
    return this.regionsService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.regionsService.findOne(slug);
  }
}
