import './polyfills';

import {enableProdMode} from '@angular/core';  // 关闭观察者模式
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'; // 使用哪个模块启动整个应用
import {environment} from './environments/environment'; // 倒入环境配置
import {AppModule} from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
