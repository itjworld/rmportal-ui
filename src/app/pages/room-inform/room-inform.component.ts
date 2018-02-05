import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { FilterPorcessService } from '../../services/filterPorcess.service';


@Component({
  selector: 'app-room-inform',
  templateUrl: './room-inform.component.html',
  styleUrls: ['./room-inform.component.css']
})
export class RoomInformComponent implements OnInit {

  constructor(private _filterService:FilterPorcessService) { }

  ngOnInit() {
  }
  get roomDetail():any{
    return this._filterService.roomDetail;
  }
  
  set roomDetail(value:any){
    this._filterService.roomDetail=value;
  }
}
