export interface IInfomation{
    id:number;
    name:string;
    mobile:string;
    street1:string;
    street2:string;
    location:string;
}

export class Information implements IInfomation{
    constructor(public id:number,public name:string,public mobile:string,public street1:string,public street2:string
        ,public location:string){
        
    }
  
}