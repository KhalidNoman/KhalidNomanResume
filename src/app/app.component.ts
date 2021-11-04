import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Resume';

  mobile = false;
  myDetails={
    phone:'+966553314600',
    email:"ksnoman@live.com"
  }
  copied = "";
  
  
  
  constructor(private _snackbar: MatSnackBar){
    if (window.screen.width < 480) {
      this.mobile = true;
    } else this.mobile=false;
  }

  onResize($event:any){
    if (window.screen.width < 480) {
      this.mobile = true;
    } else this.mobile=false;
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
