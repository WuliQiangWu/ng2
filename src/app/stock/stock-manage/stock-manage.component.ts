import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Stock, StockService} from '../stock.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx'
@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {
  private stocks: Array<Stock>
  private StockFilter:FormControl = new FormControl();
  private keyword:string;
  constructor(public router: Router, private StockService: StockService) {
  }

  ngOnInit() {
    this.stocks = this.StockService.getStock();
    this.StockFilter.valueChanges
      .debounceTime(500)
      .subscribe(value=>this.keyword=value);
  }

  creat() {
    this.router.navigateByUrl('stock/0');
  }

  upData(stock: Stock) {
    this.router.navigateByUrl('stock/' + stock.id);
  }
}

