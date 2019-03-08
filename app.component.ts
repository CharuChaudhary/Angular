import { Component } from '@angular/core';
import {DataService} from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Table';
  public data = [];
  header: Array<any>;

  constructor(private _dataService: DataService){}

  ngOnInit(){
    this.data=this._dataService.getData();
    this.header=Object.keys(this.data[0]);
  }

  sort(head){
    console.log(head);
    switch(head){
      case "id":

      break;
    }
  }
  
}
