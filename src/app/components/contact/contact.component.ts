import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  toppings = new FormControl();

  // Here you can change toppings
  toppingList: string[] = ['Extra cheese','Ham', 'Mushroom', 'Pinapple', 'Pepperoni', 'Sausage'];

  // Email validation
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
    }

    // Hide password
    hide = true;

  constructor() {
  }

  ngOnInit(): void {
  }

}