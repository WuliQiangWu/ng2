"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var menu_component_1 = require("./menu/menu.component");
var slidebar_component_1 = require("./slidebar/slidebar.component");
var footer_component_1 = require("./footer/footer.component");
var content_component_1 = require("./content/content.component");
var stock_manage_component_1 = require("./stock/stock-manage/stock-manage.component");
var starts_component_1 = require("./starts/starts.component");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var stock_form_component_1 = require("./stock/stock-form/stock-form.component");
var stock_service_1 = require("./stock/stock.service");
var forms_2 = require("@angular/forms");
var filter_pipe_1 = require("./stock/filter.pipe");
var routeConfig = [
    { path: '', redirectTo: 'dashBoard', pathMatch: 'full' },
    { path: 'dashBoard', component: dashboard_component_1.DashboardComponent },
    { path: 'stock', component: stock_manage_component_1.StockManageComponent },
    { path: 'stock/:id', component: stock_form_component_1.StockFormComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            menu_component_1.MenuComponent,
            slidebar_component_1.SlidebarComponent,
            footer_component_1.FooterComponent,
            content_component_1.ContentComponent,
            stock_manage_component_1.StockManageComponent,
            starts_component_1.StartsComponent,
            dashboard_component_1.DashboardComponent,
            stock_form_component_1.StockFormComponent,
            filter_pipe_1.FilterPipe
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            router_1.RouterModule.forRoot(routeConfig)
        ],
        providers: [stock_service_1.StockService],
        bootstrap: [app_component_1.AppComponent] // 模块主组件
    })
], AppModule);
exports.AppModule = AppModule;
