import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class GatewaySvcController {
  constructor(@Inject('SAMPLE_2') private sampleSvcClient: ClientProxy) {}

  @Get('/event')
  async getEvent(): Promise<void> {
    await this.sampleSvcClient.emit('sample/event', '');
  }
  @Get('/message')
  async getMessage(): Promise<string> {
    return await firstValueFrom(
      this.sampleSvcClient.send('sample/message', ''),
    );
  }

  @Get()
  getHello(): string {
    return `Hello SampleService2 Gateway!`;
  }

  @Get('/health')
  async healthCheck(): Promise<string> {
    return `SampleService2 Healthy`;
  }
}
