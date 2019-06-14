import { EventEmitter, Injectable } from '@angular/core';

import { LoggingService } from './logging.service';

import { TestService } from './test.service';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  // statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService,private testService: TestService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    console.log(this.accounts.length);
for(let k=0;k<this.accounts.length;k++){
  console.log("Name :"+ this.accounts[k].name +"Status :"+this.accounts[k].status );
}

    // this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
    this.testService.logStatusChange1(status,this.accounts);
  }
}
