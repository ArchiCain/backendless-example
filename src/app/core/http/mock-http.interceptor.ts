import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Logger } from '../logger.service';

import { demographicBackend } from '../demographic/demographic.backend';
import { birthDayBackend } from '../birth-day/birth-day.backend';

const logger = new Logger('MockHttpInterceptor');

@Injectable()
export class MockHttpInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let url: string = request.url;
        let method: string = request.method;

        logger.debug("url = ", url);
        logger.debug("method = ", method);

        return demographicBackend(url, method, request) ||
            birthDayBackend(url, method, request) ||
            next.handle(request); // fallback in case url isn't caught
    }

}
