import { Component, ComponentFactoryResolver, Input, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './Auth/Service/auth.service';
import { User } from './Models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular client for Evona Hackathon Betting-API';
  constructor(private authService:AuthService) {
  }

}
