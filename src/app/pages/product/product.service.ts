import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiMethod } from 'src/app/core/services/consts';
import { HttpService } from 'src/app/core/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private __http: HttpService) { }

  getProducts(page: {limit: number, offset: number}): Observable<any> {
    return this.__http.requestCall('api/product', ApiMethod.GET, null, page)
      .pipe(map(data => {
        return data
      }))
  }
}
