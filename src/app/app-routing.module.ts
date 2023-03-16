import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { LogComponent } from './log/log.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'albums', component: AlbumComponent},
  {path: 'logs', component: LogComponent},
  {path: 'users', component: UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
