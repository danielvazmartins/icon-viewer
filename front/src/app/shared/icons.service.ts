import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://localhost:3000' 

@Injectable({
    providedIn: 'root'
})
export class IconsService {

    constructor( private http: HttpClient ) {}

    getIcons(): Observable<any> {
        return this.http.get(`${apiUrl}`)
    }
}