import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IFilterInformation} from '../beans/filterInformation';
import { CommonService } from '../services/common.service';
import { IEnquiry } from '../beans/enquiry';
import { IDomain } from '../beans/Domain';

@Injectable()
export class FilterPorcessService{
    cardList:IFilterInformation[];
    userDetail:IEnquiry;
    location:IDomain[];
    gender:IDomain[];
    airCondition:IDomain[];
    rooms:IDomain[];
    constructor(private _commonService:CommonService){
        
    }

    getTableInfomation(localities:any,price:any,acId:any,gender:any,rooms:any){
        this._commonService.getDetails(localities,price,acId,gender,rooms).subscribe((detailData)=>this.cardList=detailData);
    }

    saveViewContactDetail(enquiry:any){
        this._commonService.saveViewContactDetail(enquiry).subscribe((enquiryData)=>{
            this.userDetail=enquiryData;
            console.log(this.userDetail);
        });
    }
}