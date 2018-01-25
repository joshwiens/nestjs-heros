import { Module, RequestMethod, MiddlewaresConsumer } from '@nestjs/common';

import { SharedModule } from '../../shared/shared.module';
import { AuthMiddleware } from '../../shared/middlewares';

import { VillainsController } from './villains.controller';
import { VillainsService } from './villains.service';

@Module({
  components: [VillainsService],
  controllers: [VillainsController],
  modules: [SharedModule],
  exports: [VillainsService],
})
export class VillainsModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(AuthMiddleware)
      .with([])
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
