import { Module } from '@nestjs/common';
import { GatewaySvcController } from './gateway-svc.controller';
import { RmqModule } from '@app/common';

@Module({
  imports: [
    RmqModule.register({
      name: 'SAMPLE_2',
    }),
  ],
  controllers: [GatewaySvcController],
  providers: [],
})
export class GatewaySvcModule {}
