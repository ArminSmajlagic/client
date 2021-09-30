import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string='';
  password:string='';
  error:string='';
  returnUrl:string='';
  constructor(private authService:AuthService,private router:Router,private route:ActivatedRoute) {
    if(this.authService.currentUserValue){
      router.navigate(["/"])
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onSubmit(form:NgForm)
  {
      this.username=form.value.username;
      this.password=form.value.password;
      this.authService.login(this.username, this.password)
            .pipe(first())
            .subscribe(
                data => {
                  console.log(this.returnUrl)
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error.error;
                });
      form.reset();
  }
}
