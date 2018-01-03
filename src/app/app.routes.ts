import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { MappingComponent } from './mapping/mapping.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QueryComponent } from './query/query.component';
import { RoomComponent } from './room/room.component';
import { RegistrationComponent } from './registration/registration.component';

// Route Configuration
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component:HomeComponent},
    { path: 'mapping', component: MappingComponent },
    { path: 'address', component: AddressComponent },
    { path: 'login', component: LoginComponent },
    { path: 'query', component: QueryComponent },
    { path: 'room', component: RoomComponent },
    { path: 'signup', component: RegistrationComponent },
  { path: '**', component:HomeComponent},
  ];

  export const appRouterModule = RouterModule.forRoot(routes);
  