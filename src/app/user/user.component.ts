import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Album, User } from '../interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id?: number;
  private sub: any;
  albums?: Album[]
  created: number = 0;
  deleted: number = 0;
  user?: User
  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });

    this.api.getUserAlbums(this.id).subscribe((data) => {
      this.albums = data;
    })

    this.api.getUserInfo(this.id).subscribe(data => {
      this.user = data
    })

  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onDeleteAlbum(id: number) {
    // track delete log
    console.log("deleting album")
    this.api.deleteUserAlbum(id).subscribe(_ => {
      this.albums = this.albums?.filter((album: { id: number | undefined; }) => album.id !== id)
      this.deleted++
      let getStorage = JSON.parse(localStorage.getItem("logs") || "[]")
      getStorage.unshift(`${this.user?.name} deleted an album`)
      localStorage.setItem("logs", JSON.stringify(getStorage));
    })
  }

  onAddAlbum(title: string) {
    // track add
    this.api.addUserAlbum(this.id, title).subscribe(data => {
      this.albums?.unshift(data)
      this.created++
      let getStorage = JSON.parse(localStorage.getItem("logs") || "[]")
      getStorage.unshift(`${this.user?.name} added an album`)
      localStorage.setItem("logs", JSON.stringify(getStorage));
    })
  }

}
