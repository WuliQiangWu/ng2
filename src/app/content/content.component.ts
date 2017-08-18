import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle: string = '';
  pageDesc: string = '';

  constructor(public route: Router) {
    route.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
      if (event.url === '/dashBoard') {
        this.pageTitle = '这里是首页';
        this.pageDesc = '';
      } else if (event.url.startsWith('/stock')) {
        this.pageTitle = '股票详情';
        this.pageDesc = '在这里可以编辑股票信息';
      }
    });
  }

  ngOnInit() {
  }

}
