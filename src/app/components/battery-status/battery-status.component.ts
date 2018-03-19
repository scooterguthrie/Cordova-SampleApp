import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-battery-status',
  templateUrl: './battery-status.component.html',
  styleUrls: ['./battery-status.component.scss']
})
export class BatteryStatusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener("batterystatus", onBatteryStatus, false);
    function onBatteryStatus(status) {
      console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    }
  }

}
