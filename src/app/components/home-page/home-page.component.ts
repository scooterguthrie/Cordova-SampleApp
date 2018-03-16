import { Component, OnInit } from '@angular/core';
declare var device;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title = 'Cordova & Angular CLI Template';
  deviceManufacturer = device.manufacturer;
  deviceModel = device.model;
  devicePlatform = device.platform;
  deviceVersion = device.version;

  constructor() { }

  ngOnInit() {
  }

}
