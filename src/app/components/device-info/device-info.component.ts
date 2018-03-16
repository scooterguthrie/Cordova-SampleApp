import { Component, OnInit } from '@angular/core';
declare var device;

@Component({
  selector: 'app-device-info',
  templateUrl: './device-info.component.html',
  styleUrls: ['./device-info.component.scss']
})
export class DeviceInfoComponent implements OnInit {
  cordovaVersion = device.cordova;
  deviceModel = device.model;
  devicePlatform = device.platform;
  deviceUuid = device.uuid;
  deviceVersion = device.version;
  deviceManufacturer = device.manufacturer;
  deviceIsVirtual = device.isVirtual;
  deviceSerial = device.serial;

  constructor() { }

  ngOnInit() {
    document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady() {
      console.log(device.cordova);
      console.log(device.model);
      console.log(device.platform);
      console.log(device.uuid);
      console.log(device.version);
      console.log(device.manufacturer);
      console.log(device.isVirtual);
      console.log(device.serial);
    }
  }

}
