import { Module, RequestMethod, MiddlewaresConsumer } from '@nestjs/common';

import { SharedModule } from '../../shared/shared.module';
import { AuthMiddleware } from '../../shared/middlewares';

import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';

@Module({
  components: [GatewayService],
  controllers: [GatewayController],
  modules: [SharedModule],
  exports: [GatewayService],
})
export class GatewayModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(AuthMiddleware)
      .with([])
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
