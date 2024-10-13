import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private fb : FormBuilder){}

  contactForm : FormGroup = this.fb.group({
    name : ['', Validators.required],
    email : ['', Validators.required],
    message : ['', Validators.required]
  })
  sending : boolean =false;
  send(){
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
    }, 3000);
  }

}
