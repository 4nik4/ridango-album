import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  id?: number;
  private sub: any;
  photos: any
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

}
