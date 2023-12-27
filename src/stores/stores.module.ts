import { DbModule } from 'src/db/db.module';
import { Module } from '@nestjs/common';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';

@Module({
  imports: [DbModule],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule {}
