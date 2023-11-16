import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { GatewaySvcModule } from './gateway-svc.module';

async function bootstrap() {
  const app = await NestFactory.create(GatewaySvcModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<string>(`GATEWAY_PORT`);
  await app.listen(port || 3000);
}
bootstrap();
