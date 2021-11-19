import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.scss']
})
export class WarrantyComponent implements OnInit {

  @Input() titleItem!: string;
  @Input() descripItem!: string;
  @Input() aditionalPrice: number = 0;
  @Input() active = false;
  @Input() showBorder = false;

  constructor() { }

  ngOnInit(): void {
  }

}
