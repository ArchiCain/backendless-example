import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs/Rx";

@Injectable()
export class BirthDayService {

    private apiUrl = '/birthDay';

    private daysLeftSubject: BehaviorSubject<string> = new BehaviorSubject("");
    daysLeft: Observable<string> = this.daysLeftSubject.asObservable();

    constructor(private http: HttpClient) {
        this.loadInitalData();
    }

    loadInitalData() {
        this.http.get<string>(this.apiUrl + '/daysLeft')
            .subscribe(res => this.daysLeftSubject.next(res['daysLeft']));
    }

}
