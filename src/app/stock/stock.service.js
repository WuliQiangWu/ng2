"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StockService = (function () {
    function StockService() {
        this.stocks = [
            new Stock(1, '第一支股票', 1.99, 3.5, '这是第一支股票', ['IT', '互联网']),
            new Stock(2, '第二支股票', 2.99, 1.5, '这是第二支股票', ['IT', '金融']),
            new Stock(3, '第三支股票', 3.99, 2.5, '这是第三支股票', ['IT']),
            new Stock(4, '第四支股票', 4.99, 4.5, '这是第四支股票', ['互联网']),
            new Stock(5, '第五支股票', 5.99, 2.5, '这是第五支股票', ['金融', '互联网']),
            new Stock(6, '第六支股票', 6.99, 1.5, '这是第六支股票', ['IT', '互联网']),
        ];
    }
    StockService.prototype.getStock = function () {
        return this.stocks;
    };
    StockService.prototype.getStockId = function (id) {
        var stock = this.stocks.find(function (stock) { return stock.id == id; });
        if (!stock) {
            return new Stock(0, '', 0, 0, '', []);
        }
        return stock;
    };
    return StockService;
}());
StockService = __decorate([
    core_1.Injectable()
], StockService);
exports.StockService = StockService;
var Stock = (function () {
    function Stock(id, name, price, rating, desc, catrgories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.catrgories = catrgories;
    }
    return Stock;
}());
exports.Stock = Stock;
