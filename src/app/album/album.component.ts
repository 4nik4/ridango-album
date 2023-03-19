import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Photo } from '../interfaces';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  id?: number;
  private sub: any;
  photos?: Photo[]
  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['albumId']; // (+) converts string 'id' to a number
   });

   this.api.getAlbumPhotos(this.id).subscribe((data)=>{
    this.photos = data; 
  })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onDeletePhoto(id?: number) {
    // track delete log
    this.api.deleteAlbumPhoto(id).subscribe( _ => {
      this.photos = this.photos?.filter((photo: { id: number | undefined; }) => photo.id !== id)
    })
  }

  onAddPhoto(title?: string, url?: string, thumbnailUrl?: string) {
    // track add log
    console.log(title, url, thumbnailUrl)
    this.api.addAlbumPhoto(this.id, title, url, thumbnailUrl).subscribe(data => {
      this.photos?.unshift(data)
    })
  }

}
