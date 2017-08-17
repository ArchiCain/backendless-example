import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TimeOfDayService } from './time-of-day.service';

@Component({
    selector: 'time-of-day',
    templateUrl: './time-of-day.component.html',
    providers: [TimeOfDayService]
})
export class TimeOfDayComponent implements OnInit {
    timeOfDay: string;

    constructor(private timeOfDayService: TimeOfDayService) { }

    ngOnInit() {
        this.timeOfDay = this.timeOfDayService.getTimeOfDay();
    }
}
