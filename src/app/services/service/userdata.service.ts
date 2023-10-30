import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  data = [
    { name: "vikash", email: "v@gmail.com" },
    { name: "sanu", email: "sanu@gmail.com" },
    { name: "Laila", email: "laila@gmail.com" }
  ]; // data is property

  users() { // user is method
    return this.data;
  }
  
  // fetching api
  constructor(private http: HttpClient) { }

  /*
  post(url: string, body: any | null, options: {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: HttpObserve;
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
} = {}): Observable<any> 
*/

  // Get api
  userApi() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f684d2873c9c4016bd0a221f4e0bddf1',
    {
      headers: new HttpHeaders({'CustomHeader': 'hello'}),
      params: new HttpParams().set('print', 'pretty'),
    }
    );
  }

  jsonApi() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  // Post api
  saveUsers(data: any) {
    return this.http.post('http://localhost:3000/users', data, 
    {
      headers: new HttpHeaders({'CustomHeader': 'hello'}),
      params: new HttpParams().set('print', 'pretty'),
    });
  }
}
