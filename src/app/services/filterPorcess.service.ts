import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IFilterInformation} from '../beans/filterInformation';
import { CommonService } from '../services/common.service';

@Injectable()
export class FilterPorcessService{
    cardList:IFilterInformation[];
    constructor(private _commonService:CommonService){
        
    }

    getTableInfomation(localities:any,price:any,acId:any,gender:any,rooms:any){
        this._commonService.getDetails(localities,price,acId,gender,rooms).subscribe((detailData)=>this.cardList=detailData);
    }
}