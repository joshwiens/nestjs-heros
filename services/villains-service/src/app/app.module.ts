import { VillainsModule } from './villains/villains.module';
import { Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';

@Module({
  modules: [SharedModule, VillainsModule],
  controllers: [],
  components: [],
  exports: [],
})
export class AppModule {}
