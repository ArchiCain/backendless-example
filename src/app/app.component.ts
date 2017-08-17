import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit } from '@angular/core';

import { environment } from '../environments/environment';
import { Logger } from './core/logger.service';

const logger = new Logger('App');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        // Setup logger
        if (environment.production) {
            Logger.enableProductionMode();
        }

        logger.debug('init');
    }

}
