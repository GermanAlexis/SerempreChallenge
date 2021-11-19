import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IProduct } from '../interfaces/product.interfaces';
import { map } from 'rxjs/operators'; 

const URL_BASE = environment.URL_BASE;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  getProductApi(){
    return this._http.get<IProduct>( `${URL_BASE}`).pipe(map((response: any) => response[0]))
  }
}

