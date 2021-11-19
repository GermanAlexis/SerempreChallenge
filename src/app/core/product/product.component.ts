import { Component, OnInit } from '@angular/core';
import { IFeatures, IProduct, IWarrancyType } from 'src/app/interfaces/product.interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product!: IProduct;
  imageSelected!: string;
  imagenCapture: any;
  currentTab = 0;
  warrantySelected!: IWarrancyType;
  typeProductSelected!: number;
  featureSelected!: IFeatures;

  amountTotal = 0;


  constructor( private _productService: ProductService) { }

  ngOnInit(): void {
    this.getProductDetail();
  }

 getProductDetail() {
    this._productService.getProductApi().subscribe( (response: IProduct) => {
        this.product = response;
        this.imageSelected = this.product['images'][0]['x1'];
        this.amountTotal = this.product.price
      }
    );
  };

  eventSelectImage = (imageUrl: string) => {
    this.imageSelected = imageUrl;
  };

  eventSelectTabs = (indexTab: number) => {
    this.currentTab = indexTab;
  };

  eventWarrancy = (warrancySelect: IWarrancyType) => {
    console.log("WARRANCY SELECT : ", warrancySelect);

    this.warrantySelected = warrancySelect;
    this.calculateAmountTotal();
  };

  eventTypeProduct = (indexTab: number) => {
    this.typeProductSelected = indexTab;
  };

  eventFeature = (featureSelect: IFeatures) => {
    this.featureSelected = featureSelect;
    this.calculateAmountTotal();
  };

  calculateAmountTotal = () => {
    const featurePrice : number =
      this.featureSelected && this.featureSelected.additionalValue
        ? parseFloat(this.featureSelected.additionalValue.toString())
        : 0;
    const warrantyPrice : number =
      this.warrantySelected && this.warrantySelected.additionalValue
        ? parseFloat(this.warrantySelected.additionalValue.toString())
        : 0;

    this.amountTotal =
      parseFloat(this.product.price.toString()) + featurePrice + warrantyPrice;
  };
}
