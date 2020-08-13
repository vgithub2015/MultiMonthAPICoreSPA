import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  private _url: string =  'http://localhost:5000/api/values';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
    console.log("URL is " + this._url);
  }

  getValues(){
    this.http.get(this._url).subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
