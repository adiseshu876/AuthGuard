import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { DefaultComponent } from './default/default.component';
// import { ProductDetailsComponent } from './components/product-details/product-details.component';
// import { ProductListComponent } from './components/product-list/product-list.component';
// import { ProductModule } from './product/product.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
    // data: { access: 'admin' },
    // canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: '', component: DefaultComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
