import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {appRoutes} from './app.routes';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {UserComponent} from './main/user/user.component';
import {RoleComponent} from './main/role/role.component';
import {ProductComponent} from './main/product/product.component';
import {ProductCategoryComponent} from './main/product-category/product-category.component';
import {HomeComponent} from './main/home/home.component';
import {FunctionComponent} from './main/function/function.component';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    ProductComponent,
    ProductCategoryComponent,
    HomeComponent,
    FunctionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
