import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from '../core/demographic/user';
import { DemographicService } from '../core/demographic/demographic.service';
import { BirthDayService } from '../core/birth-day/birth-day.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor(
        private demographicService: DemographicService,
        private birthDayService: BirthDayService) { }

    get firstName() {
        return this.demographicService.user
            .map((user: User) => user.firstName);
    }

    get daysLeft() {
        return this.birthDayService.daysLeft
            .map(res => res);
    }
}
