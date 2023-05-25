import { Component } from '@angular/core';
import { Streaming } from './models/streaming.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  OStreaming!: Observable<Streaming>
  data !:Streaming
  URL:string='https://my-json-server.typicode.com/paolocarugati/sputifai/db'
  
  constructor(public http: HttpClient) {
    this.makeTypedRequest()
  
  }
  makeTypedRequest() : void
  {
    this.OStreaming = this.http.get<Streaming>(this.URL);
    this.OStreaming.subscribe( d => {this.data = d;});
  }   

}
