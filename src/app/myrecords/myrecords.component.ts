import { Component,ViewChild} from '@angular/core';
import { CommonService } from './../services/common.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Http } from '@angular/http';
import { MailComponent } from '../mail/mail.component';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-myrecords',
  templateUrl: './myrecords.component.html',
  styleUrls: ['./myrecords.component.css']
})
export class MyrecordsComponent {

  @ViewChild(MailComponent)
  private mSailComponent:MailComponent;
  

  
  data:any;
  settings = {
    tableClass:'table table-bordered',
    tableId:'tableId',
    actions: false,
    delete: {
      confirmDelete: true,
    },
    edit: {
      confirmSave: true,
    },
    pager:{
         display:true,
         perPage:10
      }
      ,
      columns: {
        id: {
          title: 'Id',
          filter: false,
        },
        rent: {
          title: 'Rent',
          filter: false,
        },
        elecBillPaid: {
          title: 'Electricity Paid',
          filter: false,
        },
        electricBill: {
          title: 'Electricity Bill',
          filter: false,
        },
        security: {
          title: 'Security',
          filter: false,
        },
        currentMonth: {
          title: 'Month',
          filter: false,
        },
    },
  };

  source:  LocalDataSource;

  constructor(private _commonService : CommonService,private _http:Http,private alertService: AlertService) {
    this._commonService.getMyRecords("akk.anilkundu@gmail.com").subscribe((result=>{
     // console.log("hi",result.data);
    this.data = result.data;
    this.source = new LocalDataSource(this.data);
    }));
    console.log(this.data);
    //  this.source = new LocalDataSource(this.data);
    // this.loadServerData();
    
  }

  // loadServerData(){
  //   this.source = new ServerDataSource(this._http,
  //     {
  //       endPoint: this._commonService.getMyRecords(),
  //       pagerLimitKey: "_limit",
  //       pagerPageKey: "_page",
  //       filterFieldKey: '_searchParam',
  //       dataKey: 'data',
  //       totalKey: 'total',

  //     });
  // }

  onSearch(query: string = '') {
    this.source.setFilter([{
        field: 'searchParam',
        search: query,
      },
      
    ], false);
    this.source.getFilter();
    // second parameter specifying whether to perform 'AND' or 'OR' search
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }
  
  // onDeleteConfirm(event) {
  //   this.alertService.clear();
  //   if (window.confirm('Are you sure you want to delete?')) {
  //    // console.log("Delete",event.data.id);
  //     event.confirm.resolve();
  //     this._commonService.deleteRecords(event.data).subscribe((info=>{
  //       console.info("deleted : " + info.data);
  //       this.alertService.success("Record DSeleted Successfully");
  //       this.loadServerData();
  //     }), (err => {
  //       this.alertService.success("Problem while deleting record !");
  //       this.loadServerData();
  //     }));
  //   } else {
  //     event.confirm.reject();
  //   }
  // }

  // onSaveConfirm(event) {
  //   this.alertService.clear();
  //   if (window.confirm('Are you sure you want to save?')) {
  //   //  console.log(event.newData);
  //     event.confirm.resolve(event.newData);
  //     this._commonService.updateRecords(event.newData).subscribe((info=>{
  //       console.info("updated : " + info.body);
  //       this.alertService.success("Record updated Successfully");
  //       this.loadServerData();
  //     }), (err => {
  //       this.alertService.success("Problem while updating record !");
  //       this.loadServerData();
  //     }));
  //   } else {
  //     event.confirm.reject();
  //   }
  // }

  print(){
    var innerContents = document.getElementById("printSectionId").innerHTML;
    var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="assets/css/record.component.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  } 
  
}

