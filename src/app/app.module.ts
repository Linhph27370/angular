import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgxPaginationModule} from 'ngx-pagination';
import { LienheComponent } from './pages/lienhe/lienhe.component';
import { ProductAdminListComponent } from './pages/admin/product-admin-list/product-admin-list.component';
import { ProductAdminUpdateComponent } from './pages/admin/product-admin-update/product-admin-update.component';
import { ProductAdminCreateComponent } from './pages/admin/product-admin-create/product-admin-create.component';
import { ProductAdminDetailComponent } from './pages/admin/product-admin-detail/product-admin-detail.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LayoutAdminComponent } from './layouts/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginAdminListComponent } from './pages/admin/login-admin-list/login-admin-list.component';
import { RegisterAdminListComponent } from './pages/admin/register-admin-list/register-admin-list.component';
import { TintucComponent } from './pages/tintuc/tintuc.component';
import { RegisterAdminCreateComponent } from './pages/admin/register-admin-create/register-admin-create.component';
import { CategoryAdminListComponent } from './pages/admin/category-admin-list/category-admin-list.component';
import { CategryAdminCreateComponent } from './pages/admin/categry-admin-create/categry-admin-create.component';
import { CategoryAdminUpdateComponent } from './pages/admin/category-admin-update/category-admin-update.component';
import { TestCategoryListComponent } from './pages/admin/test-category-list/test-category-list.component';

import { TestDialogComponent } from './pages/admin/test-dialog/test-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeLinhComponent } from './pages/home-linh/home-linh.component';
import { DetailLinhComponent } from './pages/detail-linh/detail-linh.component';
import { HeaderLinhComponent } from './components/header-linh/header-linh.component';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    HomeComponent,
    BannerComponent,
    ProductListComponent,
    LienheComponent,
    ProductAdminListComponent,
    ProductAdminUpdateComponent,
    ProductAdminCreateComponent,
    ProductAdminDetailComponent,
    SidebarAdminComponent,
    LayoutComponent,
    LayoutAdminComponent,
    DashboardComponent,
    LoginAdminListComponent,
    RegisterAdminListComponent,
    TintucComponent,
    RegisterAdminCreateComponent,
    CategoryAdminListComponent,
    CategryAdminCreateComponent,
    CategoryAdminUpdateComponent,
    TestCategoryListComponent,
    TestDialogComponent,
    HomeLinhComponent,
    DetailLinhComponent,
    HeaderLinhComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    MatSortModule,
    MatDividerModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
