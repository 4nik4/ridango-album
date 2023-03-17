import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http: HttpClient) {}


  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'); 
  }
  getUserAlbums(userId?: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`); 
  }
  getAlbumPhotos(albumId?: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
  }

  //add photo
  addAlbumPhoto() {
    return this.http.post(`https://jsonplaceholder.typicode.com/photos`, {
      title: 'foo',
      url: 'bar',
      thumbnailUrl: 'test',
      albumId: 1,
    })
  }
  //add album
  addUserAlbum() {
    return this.http.post(`https://jsonplaceholder.typicode.com/albums`, {
      userId: 1,
      title: "sunt qui excepturi placeat culpa"
    })
  }

  //remove photo
  deleteAlbumPhoto(photoId?: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
  }

  //remove album
  deleteUserAlbum(albumId?: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
  }
}
