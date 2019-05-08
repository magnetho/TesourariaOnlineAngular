import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  open:boolean;
  constructor() { }

  ngOnInit() {

    this.open= true;
  }

  toggle(){
    if(this.open){
      this.open = false;
    }else{
      this.open = true
    }
  }



}
