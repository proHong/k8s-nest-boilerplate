import { Controller } from '@nestjs/common';
import { SampleSvcService } from './sample-svc.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class SampleSvcController {
  constructor(private readonly sampleSvcService: SampleSvcService) {}

  @EventPattern('sample/event')
  getEvent(): void {
    this.sampleSvcService.getEvent();
  }

  @MessagePattern('sample/message')
  getMessage(): string {
    return this.sampleSvcService.getMessage();
  }
}
