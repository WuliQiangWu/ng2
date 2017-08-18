import {Component, OnInit, Input, Output, EventEmitter, OnChanges,SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit, OnChanges {
  @Input()
  rating: number = 0;
  @Input()
  readOnly: boolean = true;
  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter()

  stars: boolean[];

  constructor() {
  }

  ngOnInit() {

  }
  ngOnChanges(changes:SimpleChanges):void{
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }

  }
  clickStar(index: number) {
    if (!this.readOnly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating)
    }
  }
}
