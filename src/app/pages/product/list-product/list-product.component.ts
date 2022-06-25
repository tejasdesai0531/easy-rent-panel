import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UIService } from 'src/app/core/services/ui/ui.service';
import { HeaderService } from 'src/app/core/services/util/header.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  products: any = []
  totalRecords = 0
  offset = 0

  toggle = (visibility: boolean) => {
    this.updateVisibility()
  }

  edit = (id: number) => {
    this.router.navigate(['product/edit_product', id])
  }
  
  columns: any = [
    {
      key: 'name',
      name: 'Name',
      type: 'field',
    },
    {
      key: 'charge_per_day',
      name: 'CPD',
      type: 'field',
    },
    {
      key: 'visibility',
      name: 'Visibility',
      type: 'switch',
      callback: this.toggle
    },
    {
      key: '',
      name: 'Edit',
      type: 'edit',
      callback: this.edit
    }
  ]

  constructor(
    private productService: ProductService,
    private headerService: HeaderService,
    private router: Router,
    private uIService: UIService
  ) { }

  ngOnInit(): void {

    this.headerService.setOptions('add')
    this.headerService.addEvent.subscribe(() => {
      this.router.navigate(['product/add_product'])
    })

    this.getProducts({limit: 5, offset: 0})

  }

  getProducts(page: {limit: number, offset: number}) {

    this.uIService.startLoadingIndicator()

    this.productService.getProducts(page).subscribe({
        next: (response) => {
          this.uIService.stopLoadingIndicator()
          this.uIService.showSuccessMsg(response.msg)

          this.products = response.data.products
          this.totalRecords = response.data.totalRecords
          this.offset = page.offset
        },
        error: (err) => {
          console.log(err)
        }
      }
    )

  }

  updateVisibility() {
    console.log(this.products)
  }

}
