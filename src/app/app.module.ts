import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngressComponent } from './ingress/ingress.component';
import { EgressComponent } from './egress/egress.component';
import { FormComponent } from './form/form.component';
import { IngressService } from './ingress/ingress.service';
import { EgressService } from './egress/egress.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngressComponent,
    EgressComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngressService, EgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
