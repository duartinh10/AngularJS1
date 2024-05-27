import { NgModule } from '@angular/core';

import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [UserModule ,
        BrowserModule],
    exports: [],
    declarations: [AppComponent],
    providers: [],
    bootstrap:[ AppComponent ]
})
export class AppModule { }
