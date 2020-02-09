// import { FrameworkService } from '@coreframework/framework';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app1';
  constructor() {}

  ngOnInit() {
    // setTimeout(() => {
    //   // The below method to be invoked if the EMS authentication is set to false.
    //   // Send UPI / unique code of user to Framework to store the user preferences.
    //   this.fwService.apiSetExternalUser({
    //     upi: '000527065',
    //     name: 'Roopesh Chinnakampalli',
    //     location: 'Washington DC',
    //     unit: 'ITSDT',
    //     designation: 'ET Consultant'
    //   });
    // }, 0);
  }
}
