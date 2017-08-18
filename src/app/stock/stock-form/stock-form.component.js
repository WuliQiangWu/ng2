"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var StockFormComponent = (function () {
    function StockFormComponent(routerInfo, stockService, router) {
        this.routerInfo = routerInfo;
        this.stockService = stockService;
        this.router = router;
        this.categories = ['IT', '互联网', '金融'];
        this.fb = new forms_1.FormBuilder();
    }
    StockFormComponent.prototype.ngOnInit = function () {
        var stockId = this.routerInfo.snapshot.params['id'];
        this.stock = this.stockService.getStockId(stockId);
        this.formModule = this.fb.group({
            name: [this.stock.name, [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            price: [this.stock.price, forms_1.Validators.required],
            desc: [this.stock.desc, forms_1.Validators],
            categories: this.fb.array([
                new forms_1.FormControl(this.stock.catrgories.indexOf(this.categories[0]) != -1),
                new forms_1.FormControl(this.stock.catrgories.indexOf(this.categories[1]) != -1),
                new forms_1.FormControl(this.stock.catrgories.indexOf(this.categories[2]) != -1),
            ], this.categoriesValidator)
        });
    };
    StockFormComponent.prototype.categoriesValidator = function (control) {
        var valid = false;
        control.controls.forEach(function (control) {
            if (control.value) {
                valid = true;
            }
        });
        if (valid) {
            return null;
        }
        else {
            return { categoriesLength: true };
        }
    };
    StockFormComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/stock');
    };
    StockFormComponent.prototype.save = function () {
        var chineseCategories = [];
        var index = 0;
        for (var i = 0; i < 3; i++) {
            if (this.formModule.value.categories[i]) {
                chineseCategories[index++] = this.categories[i];
            }
        }
        this.formModule.value.categories = chineseCategories;
        this.formModule.value.rating = this.stock.rating;
        console.log(this.formModule.value);
        console.log(this.formModule.hasError);
        // this.router.navigateByUrl('/stock');
    };
    return StockFormComponent;
}());
StockFormComponent = __decorate([
    core_1.Component({
        selector: 'app-stock-form',
        templateUrl: './stock-form.component.html',
        styleUrls: ['./stock-form.component.css']
    })
], StockFormComponent);
exports.StockFormComponent = StockFormComponent;
