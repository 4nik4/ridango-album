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
}
