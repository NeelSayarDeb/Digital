import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HeaderDataService {

    constructor(private http: HttpClient) { }

    public dataForCurrentMonth() {
        return this.http.get('./../../assets/json/DEC.json');
    }

}