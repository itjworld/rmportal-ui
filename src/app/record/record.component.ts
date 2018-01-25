import { Component,ViewChild} from '@angular/core';
import { CommonService } from './../services/common.service';
import { Ng2SmartTableModule, ServerDataSource } from 'ng2-smart-table';
import { Http } from '@angular/http';
import { MailComponent } from '../mail/mail.component';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent {

  @ViewChild(MailComponent)
  private mSailComponent:MailComponent;
  

  
  data:any;
  settings = {
    tableClass:'table table-bordered',
    tableId:'tableId',
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
        title: 'ID',
        filter: false,
      },
      fName: {
        title: 'Name',
        filter: false,
      },
      mobile: {
        title: 'Mobile',
        filter: false,
      },
      email: {
        title: 'Email',
        filter: false,
      },
      rent: {
        title: 'Rent',
        filter: false,
      },
      security: {
        title: 'Security',
        filter: false,
      },
    },
  };

  source:  ServerDataSource;

  constructor(private _commonService : CommonService,private _http:Http) {
    //this._commonService.getRecords().subscribe((result=>{
      //this.data = result;
      //this.source = new LocalDataSource(this.data);
    //}));
    //console.log(this.data);
    // this.source = new LocalDataSource(this.data);
    this.source = new ServerDataSource(this._http,
      { endPoint: this._commonService.getRecords(),
        pagerLimitKey:"_limit",
        pagerPageKey:"_page",
        filterFieldKey:'_searchParam',
        dataKey: 'data',
        totalKey:'total',
        
      });
    
  }

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
  
  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log("Delete",event.data.id);
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      console.log("save",event.newData);
      event.confirm.resolve(event.newData);
      this._commonService.updateRecords(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  print(){
    var innerContents = document.getElementById("printSectionId").innerHTML;
    var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="assets/css/record.component.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  } 
  
}
