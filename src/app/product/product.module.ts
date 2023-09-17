import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOneComponent } from './product-one/product-one.component';
import { ProductTwoComponent } from './product-two/product-two.component';
import { ProductThreeComponent } from './product-three/product-three.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductOneComponent,
    children: [
      {
        path: 'one',
        component: ProductTwoComponent,
        canActivateChild: [AuthGuard],
        data: { access: 'user' },
      
      },
      { path: 'two', component: ProductThreeComponent },
    ],
  },
  // {path:'',redirectTo:'product',pathMatch:'full'}
];

@NgModule({
  declarations: [
    ProductOneComponent,
    ProductTwoComponent,
    ProductThreeComponent,
  ],
  providers: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductModule {}
