import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id?: number;
  private sub: any;
  albums: any
  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
   });

   this.api.getUserAlbums(1).subscribe((data)=>{
    this.albums = data; 
  })
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onDeleteAlbum(id: number) {
    // track delete log
    console.log("deleting album")
    this.api.deleteUserAlbum(id).subscribe( _ => {
      this.albums = this.albums.filter((album: { id: number | undefined; }) => album.id !== id)
    })
  }

  onAddAlbum(title: string) {
    this.api.addUserAlbum(this.id, title).subscribe(data => {
      this.albums.push(data)
    })
  }

}
