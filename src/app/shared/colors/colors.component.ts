import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  @Input() titleItem!: string;
  @Input() descripItem!: string;
  @Input() active = false;
  @Input() showBorder = false;

  constructor() { }

  ngOnInit(): void {
  }

}
