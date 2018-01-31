import { Injectable } from '@angular/core'; 
import { Router, NavigationStart } from '@angular/router'; 
import { Observable } from 'rxjs'; 
import { Subject } from 'rxjs/Subject';

@Injectable() 
export class PopupService {
     private subject = new Subject<any>();
     constructor(){}
     confirmThis(message: any,siFn:()=>void,noFn:()=>void){
       this.setConfirmation(message,siFn,noFn);
     }
     alertThis(message: any,siFn:()=>void){
        this.setAlert(message,siFn);
      }
     setConfirmation(message: any,siFn:()=>void,noFn:()=>void) {
       let that = this;
       this.subject.next({ type: "confirm",
                   body: message.body,
                   header: message.header,
                   color: message.color,
                   border:message.color?'1px solid '+message.color:'1px solid #999',
                   showCancelBtn:true,
                   cancelBtnClass:message.cancelBtnClass,
                   confirmBtnClass:message.confirmBtnClass,
                   cancelBtnContent:message.cancelBtnContent?message.cancelBtnContent:'No',
                   confirmBtnContent:message.confirmBtnContent?message.confirmBtnContent:'Yes',
                   size:message.modalSizeClass,
                   siFn:
                   function(){
                       that.subject.next(); //this will close the modal
                       siFn();
                   },
                   noFn:function(){
                       that.subject.next();
                       noFn();
                   }
                });

            }
            setAlert(message: any,siFn:()=>void) {
                let that = this;
                this.subject.next({ type: "alter",
                            body: message.body,
                            header: message.header,
                            color: message.color,
                            showCancelBtn:false,
                            confirmBtnClass:message.confirmBtnClass,
                            confirmBtnContent:message.confirmBtnContent?message.confirmBtnContent:'Yes',
                            size:message.modalSizeClass,
                            siFn:
                            function(){
                                that.subject.next(); //this will close the modal
                                siFn();
                            }
                         });
         
                     }

            

     getMessage(): Observable<any> {
        return this.subject.asObservable();
      }
     }