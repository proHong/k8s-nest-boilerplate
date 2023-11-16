import { Module } from '@nestjs/common';
import { SampleSvcController } from './sample-svc.controller';
import { SampleSvcService } from './sample-svc.service';
import { RmqModule } from '@app/common';

@Module({
  imports: [RmqModule],
  controllers: [SampleSvcController],
  providers: [SampleSvcService],
})
export class SampleSvcModule {}
