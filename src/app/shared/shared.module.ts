import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeOfDayComponent } from './time-of-day/time-of-day.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TimeOfDayComponent
    ],
    exports: [
        TimeOfDayComponent
    ],
    providers: []
})
export class SharedModule { }
