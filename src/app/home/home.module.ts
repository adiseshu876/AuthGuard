import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeOneComponent } from './home-one/home-one.component';
import { HomeTwoComponent } from './home-two/home-two.component';
import { HomeThreeComponent } from './home-three/home-three.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeOneComponent,
    children: [
      { path: 'one', component: HomeTwoComponent },
      { path: 'two', component: HomeThreeComponent },
    ],
  },
];

@NgModule({
  declarations: [HomeOneComponent, HomeTwoComponent, HomeThreeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
