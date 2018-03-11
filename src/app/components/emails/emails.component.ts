import { Component, OnInit } from '@angular/core';
import { EmailService } from '../../services/email.service';

@Component({
    selector: 'app-emails',
    templateUrl: './emails.component.html',
    styleUrls: ['./emails.component.sass']
})
export class EmailsComponent implements OnInit {

    private emailList = [];

    constructor(private eService: EmailService) {

    }

    ngOnInit() {
        this.getDomains(0, 10);
    }

    getDomains(startAt, number) {
        this.eService
            .getAll(startAt, number)
            .subscribe((eList) => { this.emailList = eList.emails; });
    }

    // forwardToString(f) {
    //     return f.map(function (fo) {
    //         return fo.email;
    //     }).join(', ');
    // }

}
