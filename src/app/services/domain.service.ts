import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
// import { Domain } from '../models/domain';
// import { DomainList } from '../models/domain-list';

@Injectable()
export class DomainService {

    private DOMAIN_URL = '/domains';

    constructor(private api: ApiService) {

    }

    public getAll(startAt, number): Observable<any> {
        return this.api.get(this.DOMAIN_URL + '?startAt=' + startAt + '&number=' + number);
    }

}
