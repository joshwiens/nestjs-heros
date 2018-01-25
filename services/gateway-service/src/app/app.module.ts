import { GatewayModule } from './gateway/gateway.module';
import { Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';

@Module({
  modules: [SharedModule, GatewayModule],
  controllers: [],
  components: [],
  exports: [],
})
export class AppModule {}
