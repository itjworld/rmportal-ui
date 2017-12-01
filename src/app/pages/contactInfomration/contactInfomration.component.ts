import { Component} from '@angular/core';
import { FilterPorcessService } from '../../services/filterPorcess.service';


@Component({
  selector: 'app-contactInfomration',
  templateUrl: './contactInfomration.component.html',
  
})
export class ContactInfomrationComponent {

  constructor(private _filterService:FilterPorcessService) { }

  
  get contactDetail():any{
    return this._filterService.information;
  }
  
  set contactDetail(value:any){
    this._filterService.information=value;
  }

}


