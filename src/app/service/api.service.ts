import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  public getCharacters(page = 1){
    return this.http.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
  }
}
