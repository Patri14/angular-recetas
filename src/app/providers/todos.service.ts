import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

//donde está nuestro servicio, su punto de entrada
const END_POINT = 'http://localhost:3000';

@Injectable()

export class TodosService {



  constructor(public http: HttpClient) { }

  getTodos():Observable<any>{
    let url = END_POINT + '/todos?userId=2'

      return this.http.get(url);
  }
}