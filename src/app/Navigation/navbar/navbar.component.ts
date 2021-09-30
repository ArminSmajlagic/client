import { Component, OnInit, DoCheck, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AuthService } from 'src/app/Auth/Service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck,OnChanges {

  @Input() logedIn:boolean=this.authService.currentUserValue ? true : false;

  constructor(private authService:AuthService) { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngDoCheck(): void {
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

}
