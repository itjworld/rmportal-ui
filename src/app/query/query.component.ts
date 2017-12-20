import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { AlertService } from '../alert/alert.service';
import {AuthenticationService} from './../services/authentication.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  constructor(private _commonService : CommonService, private alertService: AlertService,private _service : AuthenticationService) { }
  query:String;

  ngOnInit() {
    this._service.checkCredentials();
  }

  execute(){
    console.log("++++++ " + this.query);
    this.alertService.clear();
    if(this.query!=null)
       this._commonService.execute(this.query).subscribe((result=>{
        console.info(result);
        if(result){
           this.alertService.success("Query executed successfully");
        }
        else{
          this.alertService.error("error while executing Query");
           }
    }));
  }

}
