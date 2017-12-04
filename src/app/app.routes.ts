import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { MappingComponent } from './mapping/mapping.component';
import { HomeComponent } from './home/home.component';

// Route Configuration
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component:HomeComponent},
    { path: 'mapping', component: MappingComponent },
    { path: 'address', component: AddressComponent }
  ];

  export const appRouterModule = RouterModule.forRoot(routes);
  