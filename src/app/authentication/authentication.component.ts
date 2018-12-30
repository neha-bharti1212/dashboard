import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {

  email = new FormControl('',[Validators.required, Validators.email]);
  hide = true;
  getErrorMessage()
  {
    return this.email.hasError('required') ? 'This field cannot be empty' :
      this.email.hasError('email') ? 'Not a valid Email address' :
      '';
  }

}
