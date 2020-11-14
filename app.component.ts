import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contactList: any;
  constructor(public contactsService: ContactsService){
    
  }

  ngOnInit() {
    this.addContact();
  }

  getContactsList() {
    this.contactsService.getContactsList().subscribe((data: any)=> {
      console.log(data);
      console.log('Contact list fetched successfully');
    });
  }

  addContact() {
    const sampleData = {
      "first_name": "Kishor Rajan",
      "last_name": "N K",
      "phone": "+91 9787216763"
    };
    this.contactsService.addContact(sampleData).subscribe((data: any)=> {
      console.log('Contact added successfully');
      setTimeout(() => {
        this.getContactsList();
      }, 3000);
    });
  }

  deleteContact(id) {
    this.contactsService.deleteContact('id').subscribe((data: any)=> {
      console.log('Contact deleted successfully');
    });
  }
}
