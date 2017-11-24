import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {IDomain} from '../beans/domain';

@Injectable()
export class FilterPorcessService{
    cardList:any=[0,1,2,3,4,5,6,7,8,9];
    domain:IDomain[];
    constructor(private _http:Http){
        
    }
}