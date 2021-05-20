import { Component, Input, OnInit } from '@angular/core';
import { Observation } from 'src/app/models/observation';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {
  @Input() obs?: Observation;

  constructor() { }

  ngOnInit(): void {
  }

}
