import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntakeFormComponent } from './intake-form/intake-form.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // {
      //   path: '',
      //   component: HomeComponent,
      //   pathMatch: 'full',
      //   data: { title: 'Home Page'},
      // },
    ],
  },
  {
    path: 'intake-form',
    component: IntakeFormComponent,
    pathMatch: 'full',
    data: { title: 'Fetch Intake Form'},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
