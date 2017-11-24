import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IDomain} from '../beans/domain';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService{
    constructor(private _http:Http){
        
    }
    getLocation():Observable<IDomain[]>{
        return  this._http.get("http://springbootangular2-env.us-east-2.elasticbeanstalk.com/api/v1/details/location")
        .map((response:Response)=><IDomain[]>response.json());
    }
    getGender():Observable<IDomain[]>{
        return  this._http.get("http://springbootangular2-env.us-east-2.elasticbeanstalk.com/api/v1/details/gender")
        .map((response:Response)=><IDomain[]>response.json());
    }
    getAirCondition():Observable<IDomain[]>{
        return  this._http.get("http://springbootangular2-env.us-east-2.elasticbeanstalk.com/api/v1/details/ac")
        .map((response:Response)=><IDomain[]>response.json());
    }
    
    getRoom():Observable<IDomain[]>{
        return  this._http.get("http://springbootangular2-env.us-east-2.elasticbeanstalk.com/api/v1/details/room")
        .map((response:Response)=><IDomain[]>response.json());
    }
}