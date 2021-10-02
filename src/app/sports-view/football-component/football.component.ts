import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/Auth/Service/auth.service';
import { game } from '../Item/game';
import { post } from '../Item/post';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent implements OnInit {
  constructor(private authService:AuthService,private router:Router,private httpClient:HttpClient) { }
  url:string="https://localhost:44398/api/v1/Game"
  posts:game[]=[];
  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(){
    this.httpClient.get<game[]>(this.url)
    .pipe(
      map(resData => {
        const array:game[]=[];
        for(const i in resData){
          array.push({...resData[i]});
        };
        return array;
      }))
      .subscribe(array=>{
        this.posts=array;
      });
  }
  logout(){
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
