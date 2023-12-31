import { RegisterAdminCreateComponent } from './pages/admin/register-admin-create/register-admin-create.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailproductComponent } from './pages/detailproduct/detailproduct.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { LienheComponent } from './pages/lienhe/lienhe.component';
import { ProductAdminListComponent } from './pages/admin/product-admin-list/product-admin-list.component';
import { ProductAdminCreateComponent } from './pages/admin/product-admin-create/product-admin-create.component';
import { ProductAdminUpdateComponent } from './pages/admin/product-admin-update/product-admin-update.component';
import { ProductAdminDetailComponent } from './pages/admin/product-admin-detail/product-admin-detail.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginAdminListComponent } from './pages/admin/login-admin-list/login-admin-list.component';
import { RegisterAdminListComponent } from './pages/admin/register-admin-list/register-admin-list.component';
import { TintucComponent } from './pages/tintuc/tintuc.component';
import { CategoryAdminListComponent } from './pages/admin/category-admin-list/category-admin-list.component';
import { CategryAdminCreateComponent } from './pages/admin/categry-admin-create/categry-admin-create.component';
import { CategoryAdminUpdateComponent } from './pages/admin/category-admin-update/category-admin-update.component';
import { TestCategoryListComponent } from './pages/admin/test-category-list/test-category-list.component';
import { TestDialogComponent } from './pages/admin/test-dialog/test-dialog.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { HomeLinhComponent } from './pages/home-linh/home-linh.component';
import { DetailLinhComponent } from './pages/detail-linh/detail-linh.component';
const routes: Routes = [
  // Ứng dụng phía máy chủ: (admin)
   {
     path: 'admin',
     component: LayoutAdminComponent,
     children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: ProductAdminListComponent },
      { path: 'product-list', component: ProductAdminListComponent },
      { path: 'product-create', component: ProductAdminCreateComponent },
      { path: 'products-update/:id', component: ProductAdminUpdateComponent },
      { path: 'product-detail/:id', component: ProductAdminDetailComponent },
      {path: 'category',component:TestCategoryListComponent},
      {path:'form',component:TestDialogComponent},
     {path: 'login-list', component: LoginAdminListComponent},
     {path: 'register-list', component: RegisterAdminListComponent},
     {path: 'register-create', component: RegisterAdminCreateComponent},
     ],
     
   },
    

  // // ứng dụng phía khách:
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeLinhComponent },
      { path: 'product', component: ProductListComponent },
      {path: 'product/:id', component: DetailLinhComponent},
      {path: 'tintuc', component: TintucComponent},
      { path: 'lienhe', component: LienheComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', component: NotFoundComponent },
    ],
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
