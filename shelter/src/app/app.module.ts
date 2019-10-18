import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheltersComponent } from './shelters/shelters.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { MainService } from './shared/main.service';
import { RegistrationShelterComponent } from './registration-shelter/registration-shelter.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { NeedsComponent } from './needs/needs.component';

@NgModule({
  declarations: [
    AppComponent,
    SheltersComponent,
    RegistrationComponent,
    LoginComponent,
    UsersComponent,
    RegistrationShelterComponent,
    RegistrationUserComponent,
    NeedsComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
