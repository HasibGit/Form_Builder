import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.email = this.email;
    this.password = this.password;

    if (this.email === "hasib@gmail.com" && this.password === "12345") {
      this.router.navigate(['questions']);
    }
    else {
      this.router.navigate(['']);
    }

  }


}
