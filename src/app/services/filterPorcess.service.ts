import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {IFilterInformation} from '../beans/filterInformation';
import { CommonService } from '../services/common.service';
import { IEnquiry } from '../beans/enquiry';
import {IInfomation} from '../beans/infomation';
import 'rxjs/add/operator/toPromise';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class FilterPorcessService{
    cardList:IFilterInformation[];
    userDetail:IEnquiry;
    information:IInfomation;
    constructor(private _commonService:CommonService,private _loaderService: LoaderService){
        
    }

    getTableInfomation(localities:any,price:any,acId:any,gender:any,rooms:any){
        this._commonService.getDetails(localities,price,acId,gender,rooms).subscribe((detailData)=>{
            this.cardList=detailData;
            this._loaderService.display(false);
        });
    }

    saveViewContactDetail(enquiry:any):Promise<IEnquiry>{

        let q: Promise<IEnquiry> = new Promise(
            ( resolve, reject) => {
                this._commonService.saveViewContactDetail(enquiry).subscribe((enquiryData)=>{
                    this.userDetail=enquiryData;
                    resolve(enquiryData);
                });
            }
        );
        return q;
    }

    getContactInfomation(_id:number){
        this._commonService.getContactInfomation(_id).subscribe((inform)=>this.information=inform);
    }

    
}