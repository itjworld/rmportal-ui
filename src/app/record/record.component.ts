import { Component,ViewChild,OnInit} from '@angular/core';
import { CommonService } from './../services/common.service';
import { Ng2SmartTableModule, ServerDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';
import { MailComponent } from '../mail/mail.component';
import { AlertService } from '../alert/alert.service';
import { PopupService } from '../popup/popup.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit{

  @ViewChild(MailComponent)
  private mSailComponent:MailComponent;
  
  data:any;
  sr : number = 0;
  source:  ServerDataSource;
  addressFilter:any
  address=0;
  constructor(private popupService :PopupService,private _commonService : CommonService,private _http:HttpClient,private alertService: AlertService) {
      this.getSourceFromServer();
      this._commonService.getAddressDetail().subscribe((address)=>this.addressFilter=address);
  }
  ngOnInit() {
    this.mSailComponent.setType("RR");
  }
  settings = {
    tableClass:'table table-bordered',
    tableId:'tableId',
    actions: {
      position: 'right',
      add:false,
    },
    delete: {
      confirmDelete: true,
    },
    edit: {
      confirmSave: true,
    },
    pager:{
         display:true,
         perPage:10
      },
    columns: {
      id: {
        title: '',
        filter: false,
        valuePrepareFunction: () => { 
          return this.sr +=1;
        },
        
      },
      roomNo: {
        title: 'Room No',
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
        title: 'Room Rent',
        filter: false,
        type:'html',
        valuePrepareFunction: (cell,row) => { 
          return "<a href='/rent-detail/"+row.id+"' style='color:#fff'>"+row.rent+"</a>";
        },
      },
      security: {
        title: 'Security',
        filter: false,
      },
      checkindate: {
        title: 'Check_In_Date',
        filter: false,
      },
      active: {
        title: 'Status',
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
  
  onDeleteConfirm(event) {
    this.alertService.clear();
    var that=this;
    this.popupService.confirmThis({body:"Are you sure you want to delete?",header:'Alert'
  ,color:'#c9302c',cancelBtnClass:'btn-primary',confirmBtnClass:'btn-success',
  modalSizeClass:'modal-sm'},function(){
      console.log("delete"+that);
      that._commonService.deleteRecords(event.data).subscribe((info=>{
        console.info("deleted : ");
        event.confirm.resolve();
        that=null;
      }), (err => {
        event.confirm.resolve();
      }));
    },function(){
      event.confirm.reject();
    });
  }

  onSaveConfirm(event) {
    this.alertService.clear();
    var that=this;
    this.popupService.confirmThis({body:"Are you sure you want to update?",header:'Alert'
    ,color:'#31b0d5',cancelBtnClass:'btn-primary',confirmBtnClass:'btn-success',
    modalSizeClass:'modal-sm'},function(){
      console.log("delete"+that);
      that._commonService.updateRecords(event.newData).subscribe((info=>{
        console.info("updated : " + info.body);
        event.confirm.resolve(event.newData);
        that=null;
      }), (err => {
        event.confirm.resolve();
      }));
    },function(){
      event.confirm.reject();
    });
  }

  print(){
    var innerContents = document.getElementById("printSectionId").innerHTML;
    var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="assets/css/record.component.css" /></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  } 

  get url():string{
    return this._commonService._URL;
  }

  onChangeAddress(event){
      console.log(event.target.value);
      this.address=event.target.value;
      this.getSourceFromServer();
  }

  getSourceFromServer(){
    this.source = new ServerDataSource(this._http,
      {
        endPoint: this._commonService.getRecords()+"/"+this.address,
        pagerLimitKey: "_limit",
        pagerPageKey: "_page",
        filterFieldKey: '_searchParam',
        dataKey: 'data',
        totalKey: 'total',
      });
  }
  
}
