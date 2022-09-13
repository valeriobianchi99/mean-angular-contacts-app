import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';
import { BASE_API_URL } from './properties';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private http: HttpClient) { }

  getContacts(): Observable<any>{
    return this.http.get(`${BASE_API_URL}/contacts`);
  }

  addContact(contact: any): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${BASE_API_URL}/contact`, contact, {headers});
  }

  deleteContact(id: any): Observable<any>{
    return this.http.delete(`${BASE_API_URL}/contact/${id}`);
  }
  
 
}
