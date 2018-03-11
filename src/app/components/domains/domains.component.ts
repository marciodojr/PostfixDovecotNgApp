import { Component, OnInit } from '@angular/core';
import { DomainService } from '../../services/domain.service';

@Component({
    selector: 'app-domains',
    templateUrl: './domains.component.html',
    styleUrls: ['./domains.component.sass']
})
export class DomainsComponent implements OnInit {

    private domainList = [];


    constructor(private dService: DomainService) {

    }

    ngOnInit() {
        this.getDomains(0, 10);
    }

    getDomains(startAt, number) {
        this.dService
            .getAll(startAt, number)
            .subscribe((dList) => { this.domainList = dList.domains; });
    }

}
