import {Component, OnInit} from '@angular/core';
import {Stock, StockService} from '../stock.service';
import {ActivatedRoute, Router} from '@angular/router'
import {FormGroup, FormBuilder, Validators, FormControl, FormArray} from "@angular/forms";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock: Stock;
  formModule: FormGroup;
  categories = ['IT', '互联网', '金融'];
  fb: FormBuilder = new FormBuilder();

  constructor(private routerInfo: ActivatedRoute, private stockService: StockService, private router: Router) {
  }

  ngOnInit() {
    let stockId = this.routerInfo.snapshot.params['id'];
    this.stock = this.stockService.getStockId(stockId);

    this.formModule = this.fb.group({
      name: [this.stock.name, [Validators.required, Validators.minLength(3)]],
      price: [this.stock.price, Validators.required],
      desc: [this.stock.desc, Validators],
      categories: this.fb.array([
        new FormControl(this.stock.catrgories.indexOf(this.categories[0]) != -1),
        new FormControl(this.stock.catrgories.indexOf(this.categories[1]) != -1),
        new FormControl(this.stock.catrgories.indexOf(this.categories[2]) != -1),
      ], this.categoriesValidator)
    })


  }

  categoriesValidator(control: FormArray) {
    let valid = false;
    control.controls.forEach(control => {
      if (control.value) {
        valid = true
      }
    })
    if (valid) {
      return null
    } else {
      return {categoriesLength: true}
    }
  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  save() {
    var chineseCategories = [];
    let index = 0;
    for (var i = 0; i < 3; i++) {
      if (this.formModule.value.categories[i]) {
        chineseCategories[index++] = this.categories[i]
      }
    }
    this.formModule.value.categories = chineseCategories;
    this.formModule.value.rating = this.stock.rating;
    console.log(this.formModule.value)
    console.log(this.formModule.hasError)
    // this.router.navigateByUrl('/stock');
  }
}
