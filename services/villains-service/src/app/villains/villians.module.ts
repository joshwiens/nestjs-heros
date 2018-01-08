import { Module, RequestMethod, MiddlewaresConsumer } from '@nestjs/common';

import { SharedModule } from '../../shared/shared.module';
import { AuthMiddleware } from '../../shared/middlewares';

import { VilliansController } from './villians.controller';
import { VilliansService } from './villians.service';

@Module({
  components: [VilliansService],
  controllers: [VilliansController],
  modules: [SharedModule],
  exports: [VilliansService],
})
export class VilliansModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(AuthMiddleware)
      .with([])
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
