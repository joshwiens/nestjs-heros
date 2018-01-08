import { Module, RequestMethod, MiddlewaresConsumer } from '@nestjs/common';

import { SharedModule } from '../../shared/shared.module';
import { AuthMiddleware } from '../../shared/middlewares';

import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';

@Module({
  components: [TeamsService],
  controllers: [TeamsController],
  modules: [SharedModule],
  exports: [TeamsService],
})
export class TeamsModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(AuthMiddleware)
      .with([])
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
