import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';

const routes: Routes = [
  { path:'',
  component:TopheadingComponent},
  { path:'tech',
  component:TechnewsComponent},
  { path:'health',
  component:HealthnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
