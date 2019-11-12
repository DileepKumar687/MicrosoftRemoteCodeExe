import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChange, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { file } from './file.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  @Input()
  QueueName: string = 'Queued';

  files : file[]=[
    new file('Suspicious.xlsx','xlsx'),
    new file('Malware.docx','docx')

  ];  
  constructor(private Activatedroute:ActivatedRoute,
    private router:Router){
}

  ngOnInit() {
     this.Activatedroute.queryParamMap
    .subscribe(params => {
  this.QueueName = params.get('queuename');     
});
  }

}
