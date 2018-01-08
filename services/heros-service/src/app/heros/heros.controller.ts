import { Get, Controller } from '@nestjs/common';

// import { HerosService } from './heros.service';

@Controller('heros')
export class HerosController {
  constructor() {}

  @Get()
  root(): string {
    return 'Heros';
  }
}
