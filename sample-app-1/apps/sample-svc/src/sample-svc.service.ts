import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleSvcService {
  public getEvent(): void {
    console.log('SampleSvc1 Event!!');
  }
  public getMessage(): string {
    return 'SampleSvc1 Call Message!!';
  }
}
