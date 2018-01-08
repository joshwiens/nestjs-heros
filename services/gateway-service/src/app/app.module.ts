import { GatewayModule } from './gateway/gateway.module';
import { Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';

import { AppBootstrap } from './app.bootstrap';
import { AppComponent } from './app.component';
import { AppConfiguration } from './app.config';

@Module({
  modules: [SharedModule, GatewayModule],
  controllers: [],
  components: [AppComponent, AppBootstrap, AppConfiguration],
  exports: [AppComponent, AppBootstrap, AppConfiguration],
})
export class AppModule {}
