import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // makes it available app-wide
})
export class DataService {

  private message : string = "Hello from the data service."
   getMessage() {
    return this.message;
  }
}