import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getData(){
    return [
      {"id":1,"name":"Charu","DOB":"01-02-1996"},
      {"id":2,"name":"Akshay","DOB":"04-01-1998"},
      {"id":3,"name":"Srishti","DOB":"11-09-1994"},
      {"id":4,"name":"Himvan","DOB":"28-12-1993"},
    ]
  }

}
