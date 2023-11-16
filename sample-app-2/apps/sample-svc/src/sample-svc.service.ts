import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleSvcService {
  public getEvent(): void {
    console.log('SampleSvc2 Event!!');
  }
  public getMessage(): string {
    return 'SampleSvc2 Call Message!!';
  }
}
