import { FightsModule } from './fights/fights.module';
import { Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';

@Module({
  modules: [SharedModule, FightsModule],
  controllers: [],
  components: [],
  exports: [],
})
export class AppModule {}
