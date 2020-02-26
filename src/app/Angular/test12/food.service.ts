import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  api='http://localhost:3000/api/';
  result:any;
  constructor(private http:HttpClient) { }

  foods()
  {
    return this.http.get(this.api+'foods/').pipe(map(res=>{
      return this.result = res;
      //console.log(this.result);
    }))
  }


  Movies()
  {
    return this.http.get(this.api+'movies/').pipe(map(res=>{
      return this.result = res;
      //console.log(this.result);
    }))
  }

}
