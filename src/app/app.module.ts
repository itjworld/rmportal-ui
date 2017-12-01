import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FilterPorcessService } from './services/filterPorcess.service';
import { CommonService } from './services/common.service';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { InfoComponent } from './info/info.component';
import { AddressComponent } from './address/address.component';
import { MappingComponent } from './mapping/mapping.component';
import { ContactInfomrationComponent } from './pages/contactinfomration/contactInfomration.component';

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
    ContactInfomrationComponent
],
  imports: [
    BrowserModule,FormsModule,HttpModule, ReactiveFormsModule,
    
  ],
  providers: [FilterPorcessService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
