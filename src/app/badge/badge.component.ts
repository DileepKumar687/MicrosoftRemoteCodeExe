import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChange, AfterViewChecked, AfterContentChecked } from '@angular/core';

import { FilesdataService } from '../core/filesdata/filesdata.service';
@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class BadgeComponent implements OnInit,OnChanges,AfterContentChecked {



  @Input()
  iconClass: string;
  @Input()
  colorClass: string;
  @Input()
  title: string;
  @Input()
  count: number;
  constructor() { 
    console.log("Badge Component :  Constructor",this.count);

  }

  ngOnInit() {
    console.log("Badge Component :  OnInit",this.count);  }

  ngOnChanges(changes): void {
    
    console.log("Badge Component :  Onchange",changes);
  }

  ngAfterContentChecked(): void {
    // console.log("Badge Component :  AfterContentChecked");
  }
  
}
