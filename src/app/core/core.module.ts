import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { DemographicService } from './demographic/demographic.service';
import { BirthDayService } from './birth-day/birth-day.service';

import { MockHttpInterceptor } from './http/mock-http.interceptor';

import { environment } from '../../environments/environment';

// move providers to variable so we can append to it dynamically
let providers: any[] = [
    DemographicService,
    BirthDayService
];

// use mock backend if env variable is set
if (environment.useMockBackend == true) {
    providers.push({
        provide: HTTP_INTERCEPTORS,
        useClass: MockHttpInterceptor,
        multi: true
    });
}

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        NgbModule.forRoot()
    ],
    providers: providers
})
export class CoreModule {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        // Import guard
        if (parentModule) {
            throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
        }
    }

}
