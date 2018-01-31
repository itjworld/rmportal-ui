import { Component, OnInit } from '@angular/core';
import {PopupService} from "./popup.service";

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit{

  message: any;
  constructor(private popupService: PopupService) { 

  }
  ngOnInit() {
    this.popupService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
  

}
