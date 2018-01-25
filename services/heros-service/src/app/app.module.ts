import { HerosModule } from './heros/heros.module';
import { Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';

@Module({
  modules: [SharedModule, HerosModule],
  controllers: [],
  components: [],
  exports: [],
})
export class AppModule {}
