import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { FilterPorcessService } from '../services/filterPorcess.service';
import { CommonService } from '../services/common.service';
import { IDomain } from '../beans/Domain';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
 })
export class SidebarComponent implements OnInit {

  location:IDomain[];
  price:number=2000;
  min:number=2000;
  max:number=1000000;
  step:number=1000;
  dispalyPrice:String;
  gender:IDomain[];
  airCondition:IDomain[];
  rooms:IDomain[];
  
  
  constructor(private _filterPorcessService:FilterPorcessService,private _commonService:CommonService) { }

  ngOnInit() {
    this.dispalyPrice=this.min+"K";
    this._commonService.getLocation().subscribe((locationData)=>this.location=locationData);
    this._commonService.getGender().subscribe((genderData)=>this.gender=genderData);
    this._commonService.getAirCondition().subscribe((acData)=>this.airCondition=acData);
    this._commonService.getRoom().subscribe((roomData)=>this.rooms=roomData);
    this._filterPorcessService.getTableInfomation([],this.price,0,0,[]);
  }

  
  selectLocation():void{
    this._filterPorcessService.getTableInfomation(this.selectedLocation(),this.price,this.selectedAirCondition(),this.selectedGender(),this.selectedRooms());
  }

  selectPrice(event:any):void{
       Observable.interval(500).take(1).subscribe(x => {
        this._filterPorcessService.getTableInfomation(this.selectedLocation(),this.price,this.selectedAirCondition(),this.selectedGender(),this.selectedRooms());
      });
  }

  changePrice(event:any):void{
    this.price=event.target.value;
    let len=""+this.price
    if(len.length==4 || len.length==5){
      this.dispalyPrice=this.price+"K";
    }else{
      this.dispalyPrice=this.price+"Lac";
    }
    
  }

  selectGender(event:any):void{
     let i:number=0;
     if(event.target.checked){
        i=event.target.value;
     }
     this.gender.filter(opt =>{
        if(opt.id==i){
          opt.checked=true;
        }else{
          opt.checked=false;
        }
     });
     this._filterPorcessService.getTableInfomation(this.selectedLocation(),this.price,this.selectedAirCondition(),this.selectedGender(),this.selectedRooms());
  }

  selectAirCondition(event:any):void{
    let i:number=0;
    if(event.target.checked){
       i=event.target.value;
    }
    this.airCondition.filter(opt =>{
       if(opt.id==i){
         opt.checked=true;
       }else{
         opt.checked=false;
       }
    });
    this._filterPorcessService.getTableInfomation(this.selectedLocation(),this.price,this.selectedAirCondition(),this.selectedGender(),this.selectedRooms());
  }

  selectRooms():void{
    this._filterPorcessService.getTableInfomation(this.selectedLocation(),this.price,this.selectedAirCondition(),this.selectedGender(),this.selectedRooms());
  }

  selectedLocation():number[] {
    return this.location.filter(opt => opt.checked).map(opt => opt.id);
  }

  selectedGender():String { 
    return this.gender.filter(opt => opt.checked).map(opt => opt.id).join(",");
  }
  selectedAirCondition():String { 
    return this.airCondition.filter(opt => opt.checked).map(opt => opt.id).join(",");
  }

  selectedRooms():number[] { 
    return this.rooms.filter(opt => opt.checked).map(opt => opt.id);
  }
}


