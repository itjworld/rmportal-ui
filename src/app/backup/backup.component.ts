import { Component, OnInit } from '@angular/core';
import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent implements OnInit {

  constructor(private _commonService : CommonService) { }

  ngOnInit() {
  }

}
