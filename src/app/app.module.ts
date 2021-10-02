import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/Component/login/login.component';
import { AuthService } from './Auth/Service/auth.service';
import { HomeComponent } from './Home/home/home.component';
import { FootballComponent } from './sports-view/football-component/football.component';
import { NavbarComponent } from './Navigation/navbar/navbar.component';
import { RegisterComponent } from './Auth/Register/register/register.component';
import { GameComponent } from './sports-view/game-component/game/game.component';
import { StoreModule } from '@ngrx/store';
import { navbarReducer } from './Navigation/navbar.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FootballComponent,
    NavbarComponent,
    RegisterComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
