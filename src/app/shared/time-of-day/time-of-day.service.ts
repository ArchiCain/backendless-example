import { Injectable } from '@angular/core';

@Injectable()
export class TimeOfDayService {

    getTimeOfDay(): string {
        //set time of day
        var date = new Date();
        if (date.getHours() < 12) {
            return "morning";
        } else if (date.getHours() < 17) {
            return "afternoon";
        } else if (date.getHours() <= 24) {
            return "evening";
        } else {
            return "";
        }
    }
}