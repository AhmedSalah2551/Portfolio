import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http : HttpClient) { }
  onSubmit(form:any) : Observable<any>{
    return this.http.post('https://formspree.io/f/xyzyvzkl', form)
  }
}
