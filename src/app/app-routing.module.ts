import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/Component/login/login.component';
import { AuthGuard } from './Auth/Service/authguard';
import { HomeComponent } from './Home/home/home.component';
import { FootballComponent } from './sports-view/football/football.component';

const routes: Routes = [
{path:'',component:HomeComponent,},
{path:'auth',component:LoginComponent},
{path:'games',component:FootballComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
