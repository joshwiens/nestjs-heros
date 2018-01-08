import { Get, Controller } from '@nestjs/common';

// import { VilliansService } from './villians.service';

@Controller('villians')
export class VilliansController {
  constructor() {}

  @Get()
  root(): string {
    return 'Villians';
  }
}
