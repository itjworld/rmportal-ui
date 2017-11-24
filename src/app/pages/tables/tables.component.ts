import { Component, OnInit } from '@angular/core';
import { FilterPorcessService } from '../../services/filterPorcess.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
})
export class TablesComponent implements OnInit {

  constructor(private _filterService:FilterPorcessService) { }

  ngOnInit() {
    
  }

  get filterList():any{
    return this._filterService.cardList;
  }

   set filterList(value:any){
      this._filterService.cardList=value
   }
}
