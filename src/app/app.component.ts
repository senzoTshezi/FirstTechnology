import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fist Technology';
  msg = "";
  myEvent(currentdatetime) {
     currentdatetime= new Date();
         this.msg = currentdatetime;
      }
  
}
