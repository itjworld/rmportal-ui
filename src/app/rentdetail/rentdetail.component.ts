import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from './../services/common.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { Http } from '@angular/http';
import { MailComponent } from '../mail/mail.component';
import { PopupService } from '../popup/popup.service';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-rentdetail',
  templateUrl: './rentdetail.component.html',
  styleUrls: ['./rentdetail.component.css']
})
export class RentdetailComponent implements OnInit {
  @ViewChild(MailComponent)
  private mSailComponent:MailComponent;

  id;number;
  source:  LocalDataSource;
  constructor(private _loaderService: LoaderService,private route: ActivatedRoute,private _commonService : CommonService,private _http:Http,private popupService :PopupService) {
     this.route.params.subscribe(params => {
      this.id = +params['id']; 
        
      });
   }

  ngOnInit() {
    this.loadData();
    this.mSailComponent.setType("RD");
    this.mSailComponent.setReference(this.id);
  }

  data:any;
  settings = {
    tableClass:'table table-bordered',
    tableId:'tableId',
    actions: {
      position: 'right',
      delete:false,
      add:false,
    },
    edit: {
      confirmSave: true,
    },
    pager:{
         display:true,
         perPage:12
      }
      ,
      columns: {
        id: {
          title: 'Id',
          filter: false,
          sort:false,
          editable:false,
        },
        rent: {
          title: 'Rent',
          filter: false,
          sort:false,
        },
        elecBillPaid: {
          title: 'Electricity Paid',
          filter: false,
          sort:false,
        },
        electricBill: {
          title: 'Electricity Bill',
          filter: false,
          sort:false,
          editable:false,
        },
        security: {
          title: 'Security',
          filter: false,
          sort:false,
          editable:false,
        },
        currentMonth: {
          title: 'Month',
          filter: false,
          sort:false,
          editable:false,
        },
    },
  };

 

  onSaveConfirm(event) {
    var that=this;
    this.popupService.confirmThis({body:"Are you sure you want to update?",header:'Alert'
    ,color:'#31b0d5',cancelBtnClass:'btn-primary',confirmBtnClass:'btn-success',
    modalSizeClass:'modal-sm'},function(){
      that._commonService.updateRentDetail(event.newData).subscribe((info=>{
        console.info("updated : " + info.body);
        event.confirm.resolve(event.newData);
        that.loadData();
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

  loadData(){
    this._loaderService.display(true);
    this._commonService.getRentDetailById(this.id).subscribe((result=>{
      this.data = result.data;
      this.source = new LocalDataSource(this.data);
      this._loaderService.display(false);
   }));
  }

  get url():string{
    return this._commonService._URL;
  }

}
