import { Component, OnInit, DoCheck, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Auth/Service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck,OnChanges {

  isLoggedIn$: Observable<boolean> | undefined;

  constructor(private authService:AuthService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngDoCheck(): void {
  }

  ngOnInit(): void {
    this.isLoggedIn$=this.authService.isLoggedIn;
  }

  logout(){
    this.authService.logout();
  }


}
