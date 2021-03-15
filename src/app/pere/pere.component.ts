import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  color = 'rgb(202, 44, 123)';
  constructor() { }

  ngOnInit(): void {
  }


}
