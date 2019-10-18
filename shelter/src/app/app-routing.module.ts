import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { SheltersComponent } from './shelters/shelters.component';
import { LoginComponent } from './login/login.component';
import { RegistrationShelterComponent } from './registration-shelter/registration-shelter.component';
import { RegistrationUserComponent } from './registration-user/registration-user.component';
import { NeedsComponent } from './needs/needs.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'needs', component: NeedsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'shelters', component: SheltersComponent},
  {path: 'search', component: SearchComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registraction-shelter', component: RegistrationShelterComponent},
  {path: 'registraction-user', component: RegistrationUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
