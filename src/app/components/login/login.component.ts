import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user='1'
//   loginForm: any
//   constructor(private fb: FormBuilder, private authService: AuthService, private Router: Router) {

  
//   this.loginForm = this.fb.group({
//     email: ['', Validators.required],
//     password: ['', Validators.required]
//   });
//   // constructor(p fb: FormBuilder, private authService , AuthService, private Router: Router) {}
// }
ngOnInit(): void {
  localStorage.setItem('SessionUser',this.user)
}

}
