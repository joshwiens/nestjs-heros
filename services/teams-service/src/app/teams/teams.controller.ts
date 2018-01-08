import { Get, Controller } from '@nestjs/common';

// import { TeamsService } from './gateway.service';

@Controller('teams')
export class TeamsController {
  constructor() {}

  @Get()
  root(): string {
    return 'Teams';
  }
}
