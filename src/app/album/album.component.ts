import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  albums: any
  constructor(private api:ApiService) {}

  ngOnInit() {
    this.api.getAlbums().subscribe((data)=>{
      this.albums = data; 
    })
  }

}
