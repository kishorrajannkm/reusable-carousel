import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class ContactsService {
  constructor(public httpClient: HttpClient) { }

  getContactsList() {
    return this.httpClient.get('http://localhost:3000/api/contacts');
  }

  addContact(contact) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post('http://localhost:3000/api/contact', contact, {headers: headers});
  }

  deleteContact(id) {
    return this.httpClient.delete('http://localhost:3000/api/contacts/'+id);
  }

}
