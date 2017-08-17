import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs/Rx";

import { User } from '../demographic/user';

@Injectable()
export class DemographicService {

    private apiUrl = '/demographic';

    private userSubject: BehaviorSubject<User> = new BehaviorSubject(new User());
    user: Observable<User> = this.userSubject.asObservable();

    constructor(
        private http: HttpClient) {
        this.loadInitalData();
    }

    loadInitalData() {
        this.http.get<User>(this.apiUrl + '/user')
            .subscribe(resp => this.userSubject.next(resp));
    }
}
