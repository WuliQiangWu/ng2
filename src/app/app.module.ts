import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {SlidebarComponent} from './slidebar/slidebar.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {StockManageComponent} from './stock/stock-manage/stock-manage.component';
import {StartsComponent} from './starts/starts.component';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import {StockService} from "./stock/stock.service";
import {ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './stock/filter.pipe';
const routeConfig: Routes = [
  {path: '', redirectTo: 'dashBoard', pathMatch: 'full'},
  {path: 'dashBoard', component: DashboardComponent},
  {path: 'stock', component: StockManageComponent},
  {path: 'stock/:id', component: StockFormComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SlidebarComponent,
    FooterComponent,
    ContentComponent,
    StockManageComponent,
    StartsComponent,
    DashboardComponent,
    StockFormComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [StockService], // 提供了什么服务
  bootstrap: [AppComponent]  // 模块主组件
})
export class AppModule {
}
