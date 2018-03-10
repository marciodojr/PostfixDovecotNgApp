import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

    private menuItems = [
        {
            icon: 'home',
            href: '/',
            text: 'Início',
        },
        {
            icon: 'room',
            href: '/domains',
            text: 'Domínios',
        },
        {
            icon: 'mail',
            href: '/emails',
            text: 'Emails',
        },
    ];

    private activeUser = 'Foo Lano';


    constructor() { }

    ngOnInit() {
    }

}
