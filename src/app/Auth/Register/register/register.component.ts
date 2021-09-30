import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  res:string="";
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.authService.register(form.value.email,form.value.ime_prezime,form.value.username,form.value.password,form.value.jmbg,form.value.bdate).subscribe(res=>this.res=res);
    console.log(this.res);
    this.router.navigate(['/auth']);
  }
}
