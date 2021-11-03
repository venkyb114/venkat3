import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent implements OnInit {

  constructor() { }
  testingVariable:string = "xyz works changes";
  ngOnInit(): void {
  }

}
