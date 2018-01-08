import { Module, RequestMethod, MiddlewaresConsumer } from '@nestjs/common';

import { SharedModule } from '../../shared/shared.module';
import { AuthMiddleware } from '../../shared/middlewares';

import { FightsController } from './fights.controller';
import { FightsService } from './fights.service';

@Module({
  components: [FightsService],
  controllers: [FightsController],
  modules: [SharedModule],
  exports: [FightsService],
})
export class FightsModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(AuthMiddleware)
      .with([])
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
