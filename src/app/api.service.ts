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
  addAlbumPhoto(albumId?: number, title?: string, url?: string, thumbnailUrl?: string) {
    return this.http.post(`https://jsonplaceholder.typicode.com/photos`, {
      title: title,
      url: url,
      thumbnailUrl: thumbnailUrl,
      albumId: albumId
    })
  }
  //add album
  addUserAlbum(userId?: number, title?: string) {
    return this.http.post(`https://jsonplaceholder.typicode.com/albums`, {
      title: title,
      userId: userId
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
