export interface IFilterInformation{
    id:number;
    rent:number;
    deposit:number;
    street1:string;
    street2:string;
    content:string;
    roomType:number;
    occupied:number;
    condition:string;
    
    
	
}

export class FilterInformation implements IFilterInformation{
    
    constructor(public id:number,public rent:number,public deposit:number,public street1:string,public street2:string
        ,public content:string,public roomType:number,public occupied:number,public condition:string){
        
    }
}