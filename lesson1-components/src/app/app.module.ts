import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LogClicksDirective } from './log-clicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LogClicksDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
