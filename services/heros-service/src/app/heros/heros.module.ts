import { Module, RequestMethod, MiddlewaresConsumer } from '@nestjs/common';

import { SharedModule } from '../../shared/shared.module';
import { AuthMiddleware } from '../../shared/middlewares';

import { HerosController } from './heros.controller';
import { HerosService } from './heros.service';

@Module({
  components: [HerosService],
  controllers: [HerosController],
  modules: [SharedModule],
  exports: [HerosService],
})
export class HerosModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(AuthMiddleware)
      .with([])
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
