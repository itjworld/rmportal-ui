import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-month-records',
  templateUrl: './month-records.component.html',
  styleUrls: ['./month-records.component.css']
})
export class MonthRecordsComponent implements OnInit {

  constructor(private _commonService : CommonService,  private alertService: AlertService) { this.insertMonthRecords();}

  ngOnInit() {
  }

  insertMonthRecords(){
    this.alertService.clear();
    console.log("insert month records");
    this._commonService.insertMonthRecords().subscribe((address=>{
        this.alertService.success("Month records insert successfully");
    }), (err => this.alertService.error("Problem exists while inserting monthly recordsAddress or records already exist !")));
}

}
