import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';

import { RouterModule, Routes } from '@angular/router';
import { DomainsComponent } from './components/domains/domains.component';
import { EmailsComponent } from './components/emails/emails.component';
import { HomeComponent } from './components/home/home.component';
import { ApiService } from './services/api.service';
import { DomainService } from './services/domain.service';
import { EmailService } from './services/email.service';

import { HttpModule } from '@angular/http';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'domains', component: DomainsComponent },
    { path: 'emails', component: EmailsComponent },
];


@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        HeaderComponent,
        MainContentComponent,
        DomainsComponent,
        EmailsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        HttpModule
    ],
    providers: [ApiService, DomainService, EmailService],
    bootstrap: [AppComponent]
})
export class AppModule { }
