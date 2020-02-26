import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FoodService {
 
public api = 'localhost:3000';
  constructor(private _http:HttpClient) { }
  
getfood()
{
  /*this._http.get("/api/foods").pipe(map( res =>{
    console.log("sdsd");
  }))*/

  this._http.get("/api/foods");

}
  
}
