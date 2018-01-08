import { Get, Controller } from '@nestjs/common';

// import { GatewayService } from './gateway.service';

@Controller('gateway')
export class GatewayController {
  constructor() {}

  @Get()
  root(): string {
    return 'Gateway';
  }
}
