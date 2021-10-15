import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Image } from './model/image';
import {concatMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

    private url = 'https://raczimage.azurewebsites.net/api/';

    constructor(private http: HttpClient) {

    }

    public getImageList(): Observable<Image[]> {
        return this.http.get<Image[]>(this.url + "GetImages");
    }

    public addImage(title, file, extension): Observable<Image[]> {
      return this.http.post<Image[]>(this.url + "UploadImage", {
        extension, title, file
      });
  }

}
