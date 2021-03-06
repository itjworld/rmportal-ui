import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { FilterPorcessService } from '../services/filterPorcess.service';
import { CommonService } from '../services/common.service';
import { IDomain } from '../beans/Domain';
import { LoaderService } from '../services/loader.service';



@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent {
  min:number=10000;
  max:number=30000;
  step:number=1000;
  
  constructor(private _filterPorcessService:FilterPorcessService,private _commonService:CommonService,private _loaderService: LoaderService) { }
  
    ngOnInit() {
      this._commonService.dispalyPrice=this.min+"K";
      this._loaderService.display(true);
      this._filterPorcessService.getTableInfomation([],0,0,0,[]);
    }
  
    get price():number{
      return this._commonService.price;
    }
  
    set price(value:number){
      this._commonService.price=value;
    }
  
    get dispalyPrice():String{
      return this._commonService.dispalyPrice;
    }
  
    set dispalyPrice(value:String){
      this._commonService.dispalyPrice=value;
    }
  
    
  
    get location():any{
      return this._commonService.location;
    }
  
     set location(value:any){
        this._commonService.location=value
     }
  
    get roomType():any{
      return this._commonService.rooms;
    }
  
     set roomType(value:any){
        this._commonService.rooms=value
     }
  
     get ac():any{
      return this._commonService.airCondition;
    }
  
     set ac(value:any){
        this._commonService.airCondition=value
     }
  
     get gender():any{
      return this._commonService.gender;
    }
  
     set gender(value:any){
        this._commonService.gender=value
     }
    selectLocation():void{
      this.caller();
    }
  
    selectPrice(event:any):void{
         Observable.interval(500).take(1).subscribe(x => {
          this.caller();
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
       this.caller();
    }
  
    selectAirCondition(event:any):void{
      let i:number=0;
      if(event.target.checked){
         i=event.target.value;
      }
      this.ac.filter(opt =>{
         if(opt.id==i){
           opt.checked=true;
         }else{
           opt.checked=false;
         }
      });
      this.caller();
    }
  
    selectRooms():void{
      this.caller();;
    }
  
    selectedLocation():number[] {
      return this.location.filter(opt => opt.checked).map(opt => opt.id);
    }
  
    selectedGender():String { 
      return this.gender.filter(opt => opt.checked).map(opt => opt.id).join(",");
    }
    selectedAirCondition():String { 
      return this.ac.filter(opt => opt.checked).map(opt => opt.id).join(",");
    }
  
    selectedRooms():number[] { 
      return this.roomType.filter(opt => opt.checked).map(opt => opt.id);
    }
  
    private caller(){
      this._loaderService.display(true);
      this._filterPorcessService.getTableInfomation(this.selectedLocation(),this.price,this.selectedAirCondition(),this.selectedGender(),this.selectedRooms());
    }
}
