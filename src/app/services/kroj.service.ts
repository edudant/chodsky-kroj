import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SoucastKroje } from '../domain/soucastKroje';

@Injectable()
export class KrojService {


    constructor(private http: HttpClient) { }

    getSoucastiKroje() {
        return this.http.get<any>('assets/data/soucasti_kroje.json')
        .toPromise()
        .then(res => <SoucastKroje[]>res.data)
        .then(data => { return data; });
    }
}
