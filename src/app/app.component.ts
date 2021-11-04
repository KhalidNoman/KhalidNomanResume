import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Resume';

  isFolded = false;
  myDetails={
    phone:'+966553314600',
    email:"ksnoman@live.com"
  }
  copied = "";
  
  
  constructor(private _snackbar: MatSnackBar){

  }


  collapse() {
    this.isFolded = false;
  }

  toggle() {
    this.isFolded = !this.isFolded;
  }

  copyInfo( phone: any){
    if(phone){
      this._snackbar.open("Phone number was copied to clipboard", "Dismiss", { duration:3000})
      this.copied = this.myDetails.phone;
    }
    else {
      this._snackbar.open("Email was copied to clipboard", "Dismiss", { duration:3000})
      this.copied = this.myDetails.email
    }  
  }

}
