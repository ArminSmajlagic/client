import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth/Service/auth.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
