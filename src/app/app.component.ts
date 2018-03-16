import { Component, OnInit } from '@angular/core';
declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady() {
      console.log(device.model);
    }
  }

}
