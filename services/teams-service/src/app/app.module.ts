import { Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';
import { TeamsModule } from './teams/teams.module';

@Module({
  modules: [SharedModule, TeamsModule],
  controllers: [],
  components: [],
  exports: [],
})
export class AppModule {}
