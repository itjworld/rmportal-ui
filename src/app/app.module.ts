import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FilterPorcessService } from './services/filterPorcess.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TablesComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule
  ],
  providers: [FilterPorcessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
