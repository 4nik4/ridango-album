import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { LogComponent } from './log/log.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'logs', 
    component: LogComponent
  },
  {
    path: 'user/:id', 
    component: UserComponent,
  },
  {
    path: 'user/:userId/album/:albumId', 
    component: AlbumComponent
  },
  {
    path: 'users', 
    component: UsersComponent,
  },
  { 
    path: '', 
    redirectTo: '/users', 
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
