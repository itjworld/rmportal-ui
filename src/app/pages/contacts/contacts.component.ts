import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'contacts-component',
  templateUrl: './contacts.component.html',
 
})
export class ContactsComponent {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
      
    this.contactForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required]],
      'mobile': ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  viewContact(){
    if (this.contactForm.dirty && this.contactForm.valid) {
      document.getElementById("close").click();
    }
  }

  
}
