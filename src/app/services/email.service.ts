import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailService {

    private EMAIL_URL = '/emails';

    constructor(private api: ApiService) {

    }

    public getAll(startAt, number): Observable<any> {
        return this.api.get(this.EMAIL_URL + '?startAt=' + startAt + '&number=' + number);
    }

}
