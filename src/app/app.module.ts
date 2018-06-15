import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FilterPorcessService } from './services/filterPorcess.service';
import { CommonService } from './services/common.service';
import { AuthenticationService } from './services/authentication.service';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { InfoComponent } from './info/info.component';
import { AddressComponent } from './address/address.component';
import { MappingComponent } from './mapping/mapping.component';
import { HomeComponent } from './home/home.component';
import { ContactInfomrationComponent } from './pages/contactinfomration/contactInfomration.component';
import { appRouterModule } from "./app.routes";
import { LoginComponent } from './login/login.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { QueryComponent } from './query/query.component';
import { RoomComponent } from './room/room.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoaderService } from './services/loader.service';
import { ImgCarouselSlideComponent } from './pages/img-carousel-slide/img-carousel-slide.component';
import { RecordComponent } from './record/record.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MailComponent } from './mail/mail.component';
import { MyrecordsComponent } from './myrecords/myrecords.component';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './popup/popup.service';
import { RoomInformComponent } from './pages/room-inform/room-inform.component';
import { RentdetailComponent } from './rentdetail/rentdetail.component';
import { BackupComponent } from './backup/backup.component';
import { NgDatepickerModule } from 'ng2-datepicker';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TablesComponent,
    CapitalizePipe,
    ContactsComponent,
    InfoComponent,
    AddressComponent,
    MappingComponent,
    ContactInfomrationComponent,
    HomeComponent,
    LoginComponent,
    FilterMenuComponent,
    AlertComponent,
    QueryComponent,
    RoomComponent,
    RegistrationComponent,
    ImgCarouselSlideComponent,
    RecordComponent,
    MailComponent,
    MyrecordsComponent,
    PopupComponent,
    RoomInformComponent,
    RentdetailComponent,
    BackupComponent

],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, ReactiveFormsModule,appRouterModule,Ng2SmartTableModule,NgDatepickerModule  
  ],
  providers: [FilterPorcessService,CommonService,AuthenticationService, AlertService,LoaderService,PopupService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class AppModule { }
