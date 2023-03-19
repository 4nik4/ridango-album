import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album, Photo, User } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http: HttpClient) {}


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/'); 
  }
  getUserInfo(id?: number): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`); 
  }
  getUserAlbums(userId?: number): Observable<Album[]> {
    return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/users/${userId}/albums`); 
  }
  getAlbumPhotos(albumId?: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
  }

  //add photo
  addAlbumPhoto(albumId?: number, title?: string, url?: string, thumbnailUrl?: string): Observable<Photo> {
    return this.http.post<Photo>(`https://jsonplaceholder.typicode.com/photos`, {
      title: title,
      url: url,
      thumbnailUrl: thumbnailUrl,
      albumId: albumId
    })
  }
  //add album
  addUserAlbum(userId?: number, title?: string): Observable<Album> {
    return this.http.post<Album>(`https://jsonplaceholder.typicode.com/albums`, {
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
