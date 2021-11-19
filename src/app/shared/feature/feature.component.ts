import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() titleItem!: string;
  @Input() descripItem!: string;
  @Input() aditionalPrice: number = 0;
  @Input() active = false;
  @Input() showBorder = false;

  constructor() { }

  ngOnInit(): void {
  }

}
