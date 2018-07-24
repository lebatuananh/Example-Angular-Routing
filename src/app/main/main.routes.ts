import {Routes} from '@angular/router';
import {MainComponent} from './main.component';

export const mainRoutes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {path: '/', redirectTo: 'main', pathMatch: 'full'},
      {path: 'user', loadChildren: './user/user.module#UserModule'}
    ]
  },
];
