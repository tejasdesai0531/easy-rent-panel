import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UIService } from 'src/app/core/services/ui/ui.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  isVisible = false;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private uIService: UIService,
    private router: Router
    ) {

    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      charge_per_day: [0, Validators.required],
      image_url: ['', Validators.required],
      visibility: [0, Validators.required]
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {

    if(!this.productForm.valid) {
      this.productForm.markAllAsTouched();
    }

    console.log(this.productForm)
    return

    this.addProduct(this.productForm.value)
  }

  addProduct(product: any) {
    this.uIService.startLoadingIndicator()

    this.productService.addProduct(product).subscribe({
        next: (response) => {
          console.log(response)
          this.uIService.stopLoadingIndicator()
          this.uIService.showSuccessMsg(response.msg)

          this.router.navigate(['product'])
        },
        error: (err) => {
          this.uIService.stopLoadingIndicator()
          this.uIService.showErrorMsg("Something went wrong")
        }
      }
    )
  }

}
