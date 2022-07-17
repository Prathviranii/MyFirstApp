import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { FooterComponent } from './footer/footer.component';
import { CarrerComponent } from './carrer/carrer.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'carrer',component:CarrerComponent},
 {path:'courses',component:CoursesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


