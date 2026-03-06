import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ ADD THIS
import { BlueDirective } from './blue.directive';
import { CommonModule } from '@angular/common';
import { DataService } from './data-service';

@Component({
  selector: 'app-root',
  imports: [FormsModule , BlueDirective , CommonModule], // ✅ Add FormsModule here
  // imports: [CommonModule], // ✅ Required for ngClass, ngIf, ngFor, @for, etc.
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'angular-app';
  myname = 'ritesh';

  num1: number = 10;
  num2: number = 20;

  get sum(): number {
    return this.num1 + this.num2;
  }

  // Property Binding
  username: string = 'Rahul';

  // Event Binding
  showMessage() {
    console.log('Button clicked');
  }

  // Two-Way Data Binding
  name: string = "tara";


  // Structural directive

  isLoggedIn : boolean = true;

  // Attribute directive

  isActive : boolean = true;


  //service 
   thisIsMessage : string = "";
  constructor (private Data : DataService){
    alert(this.Data.getMessage);

    this.thisIsMessage=this.Data.getMessage();

  }


}