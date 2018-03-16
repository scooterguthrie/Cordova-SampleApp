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
      alert('Cordova Version: ' + device.cordova);
      alert('Device Model: ' + device.model);
      alert('Device Platform: ' + device.platform);
      alert('Device ID: ' + device.uuid);
      alert('Device Version: ' + device.version);
      alert('Device Manufacturer: ' + device.manufacturer);
      alert('This is a Vertual Device: ' + device.isVirtual);
      alert('Device Serial Number: ' + device.serial);
    }
  }

}
