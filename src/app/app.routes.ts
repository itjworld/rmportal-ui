import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { MappingComponent } from './mapping/mapping.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QueryComponent } from './query/query.component';
import { RoomComponent } from './room/room.component';
import { RecordComponent } from './record/record.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyrecordsComponent } from './myrecords/myrecords.component';
import { RentdetailComponent } from './rentdetail/rentdetail.component';
import { BackupComponent } from './backup/backup.component';

// Route Configuration
export const routes: Routes = [
    { path: '',component:HomeComponent},
    { path: 'home', component:HomeComponent},
    { path: 'mapping', component: MappingComponent },
    { path: 'address', component: AddressComponent },
    { path: 'login', component: LoginComponent },
    { path: 'query', component: QueryComponent },
    { path: 'room', component: RoomComponent },
    { path: 'record', component: RecordComponent },
    { path: 'signup', component: RegistrationComponent },    
    { path: 'myrecords', component: MyrecordsComponent },
    { path: 'rent-detail/:id', component: RentdetailComponent },
    { path: 'import', component: BackupComponent },
    { path: '**', component:HomeComponent},
  ];

  export const appRouterModule = RouterModule.forRoot(routes);
  