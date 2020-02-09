import { Component, OnInit } from '@angular/core';
// import { Header, FrameworkService } from '@coreframework/framework';

@Component({
  selector: 'app-landing',
  templateUrl: './app-landing.component.html',
  styleUrls: ['./app-landing.component.scss']
})
export class AppLandingComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.fwService.apiToggleLeftNav(false);

    // const header: Header = {
    //   title: 'Sample Landing',
    //   addWidget: false,
    //   resetWidget: false,
    //   addPages: false,
    //   breadcrumb: [{ label: 'Home', path: '' }]
    // };
    // this.fwService.apiSetHeader(header);

    // this.fwService.apiToggleHeaderControls({ settings: false, actions: false });
  }
}
