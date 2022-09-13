import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];
  contact: Contact = new Contact();

  first_name: any;
  last_name: any;
  phone: any;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  resetForm(){
    this.first_name=null;
    this.last_name=null;
    this.phone=null;
  }

  addContact(){
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone
    }
    this.contactService.addContact(newContact).subscribe(response => {
      this.getContacts();
      window.alert(response.msg);
      this.resetForm();
    })
  }

  getContacts(){
    this.contactService.getContacts().subscribe(
      response => {
        this.contacts = [...response];
      }
    );
  }

  deleteContact(id: string){
    this.contactService.deleteContact(id).subscribe(response =>{
      if(response.n && response.n == 1){
        this.contacts = [...this.contacts.filter(contact => contact._id !== id)];
      }
      window.alert('Deleted');
    });
  }

}
