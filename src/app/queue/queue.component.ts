import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChange, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { file } from './file.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FilesdataService } from '../core/filesdata/filesdata.service';


@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  @Input()
  QueueName: string = 'Queued';
  files: file[] = [];
  showActions = false;
  // files : file[]=[
  //   new file('Suspicious.xlsx','xlsx'),
  //   new file('Malware.docx','docx')

  // ];  
  constructor(private Activatedroute:ActivatedRoute,
    private router:Router, private filedata: FilesdataService){
}

  ngOnInit() {
     this.Activatedroute.queryParamMap
    .subscribe(params => {
  this.QueueName = params.get('queuename');
  switch (this.QueueName) {
    case 'Queued':
      this.files = this.filedata.queuedFiles;
      this.showActions = true;
      break;
    case 'Scan Performed':
        this.files = this.filedata.scannedFiles;
        break;
    case 'Quarantine':
      this.files = this.filedata.quarantineFiles;
      this.showActions = true;
      break;
    default:
      break;
  };
});

  }

 Scan(i: number){
   if (this.QueueName ==='Quarantine') {
    this.filedata.scannedFiles.push(this.filedata.quarantineFiles[i]);
    this.filedata.quarantineFiles.splice(i, 1);
    this.router.navigate(['/report']);
   } else {
    this.filedata.scannedFiles.push(this.filedata.queuedFiles[i]);
    this.filedata.queuedFiles.splice(i, 1);
    this.router.navigate(['/report']);
   }

 }
 Queue(i: number){
  this.filedata.queuedFiles.push(this.filedata.quarantineFiles[i]);
  this.filedata.quarantineFiles.splice(i, 1);
 }
}
