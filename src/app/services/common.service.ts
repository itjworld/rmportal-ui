import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IDomain} from '../beans/domain';
import {IFilterInformation} from '../beans/filterInformation';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService{
    //http://springbootangular2-env.us-east-2.elasticbeanstalk.com
    _URL:string="http://localhost:8080/rmportal";
    constructor(private _http:Http){
        
    }
    getLocation():Observable<IDomain[]>{
        return  this._http.get(this._URL+"/api/v1/details/location")
        .map((response:Response)=><IDomain[]>response.json());
    }
    getGender():Observable<IDomain[]>{
        return  this._http.get(this._URL+"/api/v1/details/gender")
        .map((response:Response)=><IDomain[]>response.json());
    }
    getAirCondition():Observable<IDomain[]>{
        return  this._http.get(this._URL+"/api/v1/details/ac")
        .map((response:Response)=><IDomain[]>response.json());
    }
    
    getRoom():Observable<IDomain[]>{
        return  this._http.get(this._URL+"/api/v1/details/room")
        .map((response:Response)=><IDomain[]>response.json());
    }

    getDetails(localities:any,price:any,acId:any,gender:any,rooms:any):Observable<IFilterInformation[]>{
        let params={localities:localities,price:price,acId:acId,gender:gender,rooms:rooms};
        return  this._http.get(this._URL+"/api/v1/details",{params: params})
        .map((response:Response)=><IFilterInformation[]>response.json());
    }

}