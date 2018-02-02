import { Component,ViewChild,OnInit} from '@angular/core';
import { CommonService } from './../services/common.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Http } from '@angular/http';
import { MailComponent } from '../mail/mail.component';
import { AlertService } from '../alert/alert.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-myrecords',
  templateUrl: './myrecords.component.html',
  styleUrls: ['./myrecords.component.css']
})
export class MyrecordsComponent implements OnInit{

  @ViewChild(MailComponent)
  private mSailComponent:MailComponent;
  
  data:any;
  source:  LocalDataSource;

  constructor(private _loaderService: LoaderService,private _commonService : CommonService,private _http:Http,private alertService: AlertService) {
  }

  ngOnInit() {
    this.loadData();
  }

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
  

  onSearch(query: string = '') {
    this.source.setFilter([{
        field: 'searchParam',
        search: query,
      },
      
    ], false);
    this.source.getFilter();
    
  }
  
  print(){
    var innerContents = document.getElementById("printSectionId").innerHTML;
    var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="assets/css/record.component.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  } 

  loadData(){
    this._loaderService.display(true);
    this._commonService.getMyRecords("akk.anilkundu@gmail.com").subscribe((result=>{
    this.data = result.data;
    this.source = new LocalDataSource(this.data);
    this._loaderService.display(false);
    }));
}

}