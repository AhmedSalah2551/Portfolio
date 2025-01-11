import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ContactService } from './services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!:FormGroup
  button : string = 'Submit'
  sending : boolean =false;
  constructor(private fb : FormBuilder,
              private service : ContactService,
              private toaster:ToastrService) { }
  ngOnInit(){
    this.createForm();
  }
  createForm(){
    this.contactForm = this.fb.group({
      name : ['', Validators.required],
      email : ['', Validators.required],
      message : ['', Validators.required]
    })
  }
  send(){
    this.button = 'Sending...';
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.button = 'Submit';
    }, 3000);
  }

  onSubmit() {
    this.send();
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.service.onSubmit(formData).subscribe(
        (response : any) => {
          this.toaster.success('Message sent successfully');
          this.contactForm.reset();
        },
        (error : Error) => {
          this.toaster.error('Error sending message');
        }
      );
    }
  }
}
