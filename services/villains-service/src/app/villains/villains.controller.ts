import { Get, Controller } from '@nestjs/common';

// import { VillainsService } from './villains.service';

@Controller('villains')
export class VillainsController {
  constructor() {}

  @Get()
  root(): string {
    return 'Villains';
  }
}
