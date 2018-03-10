import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-domains',
    templateUrl: './domains.component.html',
    styleUrls: ['./domains.component.sass']
})
export class DomainsComponent implements OnInit {

    private domainList = [
        {
            id: 1,
            name: 'domain.com'
        },
        {
            id: 2,
            name: 'anotherdomain.com'
        },
        {
            id: 3,
            name: 'domainxd.com'
        },
        {
            id: 4,
            name: 'arrrghdomain.com'
        }
    ];


    constructor() { }

    ngOnInit() {
    }

}
