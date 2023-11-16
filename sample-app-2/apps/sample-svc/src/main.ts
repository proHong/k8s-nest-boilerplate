import { NestFactory } from '@nestjs/core';
import { SampleSvcModule } from './sample-svc.module';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(SampleSvcModule);

  const rmqService = app.get(RmqService);
  app.connectMicroservice(rmqService.getOptions('SAMPLE_2'));

  await app.startAllMicroservices();
}
bootstrap();
