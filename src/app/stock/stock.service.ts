import {Injectable} from '@angular/core';

@Injectable()
export class StockService {

  constructor() {
  }

  private stocks: Stock[] = [
    new Stock(1, '第一支股票', 1.99, 3.5, '这是第一支股票', ['IT', '互联网']),
    new Stock(2, '第二支股票', 2.99, 1.5, '这是第二支股票', ['IT', '金融']),
    new Stock(3, '第三支股票', 3.99, 2.5, '这是第三支股票', ['IT']),
    new Stock(4, '第四支股票', 4.99, 4.5, '这是第四支股票', ['互联网']),
    new Stock(5, '第五支股票', 5.99, 2.5, '这是第五支股票', ['金融', '互联网']),
    new Stock(6, '第六支股票', 6.99, 1.5, '这是第六支股票', ['IT', '互联网']),
  ];

  getStock(): Stock[] {
    return this.stocks;
  }

  getStockId(id: number): Stock {
    var stock = this.stocks.find(stock => stock.id == id);
    if(!stock){
      return  new Stock(0, '', 0, 0, '', [])
    }
    return stock
  }
}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public catrgories: Array<string>) {
  }
}
