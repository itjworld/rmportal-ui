import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { FilterPorcessService } from '../../services/filterPorcess.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
 
})
export class ContactsComponent {
  _id:number;
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private _filterService:FilterPorcessService) {
    this.createForm();
    
  }
  createForm() {
    this.contactForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required]],
      'mobile': ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  viewContact(){
    if (this.contactForm.dirty && this.contactForm.valid) {
      document.getElementById("close").click();
      let enquiry:any={name:this.contactForm.value.name,email:this.contactForm.value.email,mobile:this.contactForm.value.mobile};
      this._filterService.saveViewContactDetail(enquiry).then(result => {
          if(result.id>0 && this._id>0){
            this._filterService.getContactInfomation(this._id);
            document.getElementById("viewContactDetailId").click();
          }
      });

      //alert(`Name: ${this.contactForm.value.name} Email: ${this.contactForm.value.email} Mobile: ${this.contactForm.value.mobile}`);
      //this.resetForm();
    }
  }

  resetForm(){
    //this.contactForm.reset({name: '', email: '', mobile: ''});
  }

  setReference(_id:number){
    this._id=_id;
  }
}
