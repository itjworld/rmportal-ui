import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterPorcessService } from '../../services/filterPorcess.service';
import { ContactsComponent } from '../../pages/contacts/contacts.component';
import { ContactInfomrationComponent } from '../../pages/contactinfomration/contactInfomration.component';
import { ImgCarouselSlideComponent } from '../../pages/img-carousel-slide/img-carousel-slide.component';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  
})


export class TablesComponent implements OnInit {
  @ViewChild(ContactsComponent)
  private contactsComponent:ContactsComponent;

  @ViewChild(ContactInfomrationComponent)
  private contactInfomrationComponent:ContactInfomrationComponent;

  @ViewChild(ImgCarouselSlideComponent)
  private imgCarouselSlideComponent:ImgCarouselSlideComponent;
  
  constructor(private _filterService:FilterPorcessService) { }

  ngOnInit() {
    
  }

  get filterList():any{
    return this._filterService.cardList;
  }

   set filterList(value:any){
      this._filterService.cardList=value
   }

   numberOfRoom(length:any):any{
       return new Array(length);
   }
   setReference(_id:number){
    this.contactsComponent.setReference(_id);
  }
}
