export interface IDomain{
    id:number;
    code:string;
    name:string;
    checked:boolean;
}

export class Domain implements IDomain{
    constructor(public id:number,public code:string,public name:string,public checked:boolean){

    }
}