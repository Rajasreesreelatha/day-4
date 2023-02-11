import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomePageComponent } from './pages/homepage/home-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingledistComponent } from './pages/singledist/singledist.component';

const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path:'home',component:HomePageComponent
  },
  
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'district',component:DistrictComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'singledist',component:SingledistComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
