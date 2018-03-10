import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-emails',
    templateUrl: './emails.component.html',
    styleUrls: ['./emails.component.sass']
})
export class EmailsComponent implements OnInit {

    private emailList = [
        {
            id: 1,
            email: 'contact@mydomain.com',
            forwardTo: [
                {
                    id: 1,
                    email: 'contact1@gmail.com'
                },
                {
                    id: 2,
                    email: 'contact2@gmail.com'
                }
            ],
        },
        {
            id: 2,
            email: 'support@anotherdomain.com',
            forwardTo: [
                {
                    id: 3,
                    email: 'email2@gmail.com'
                },
                {
                    id: 4,
                    email: 'email3@gmail.com'
                }
            ],
        },
        {
            id: 3,
            email: 'helpme@helpdomain.com',
            forwardTo: [
                {
                    id: 5,
                    email: 'email4@gmail.com'
                },
                {
                    id: 6,
                    email: 'email5@gmail.com'
                }
            ],
        },
        {
            id: 4,
            email: 'ukulele@domain.com',
            forwardTo: [
                {
                    id: 7,
                    email: 'email6@gmail.com'
                },
                {
                    id: 8,
                    email: 'email7@gmail.com'
                }
            ],
        },
        {
            id: 5,
            email: 'arrrrgh@domainpipi.com',
            forwardTo: [
                {
                    id: 9,
                    email: 'email8@gmail.com'
                },
                {
                    id: 10,
                    email: 'email9@gmail.com'
                }
            ],
        },
    ];

    constructor() { }

    ngOnInit() {
    }

    forwardToString(f) {
        return f.map(function(fo){
            return fo.email;
        }).join(', ');
    }

}
