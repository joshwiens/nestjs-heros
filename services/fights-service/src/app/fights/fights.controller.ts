import { Get, Controller } from '@nestjs/common';

// import { FightsService } from './fights.service';

@Controller('fights')
export class FightsController {
  constructor() {}

  @Get()
  root(): string {
    return 'Fights';
  }
}
