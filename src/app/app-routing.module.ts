import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { LogComponent } from './log/log.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'logs', component: LogComponent},
  {
    path: 'user/:id', 
    component: UserComponent,
    children: [
      {path: 'album/:id', component: AlbumComponent},
    ],
  },
  {
    path: 'users', 
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
