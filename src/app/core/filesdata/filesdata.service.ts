import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { file } from '../../queue/file.model';

@Injectable({
  providedIn: 'root'
})
export class FilesdataService {
  filesData: any = {};
  queuedFiles: file[];
  scannedFiles: file[] = [];
  quarantineFiles: file[] = [];
  // filestoShow: file[] = [];

  constructor(private http: HttpClient) {
    this.getData().subscribe((data) =>{
      this.filesData = data;
      console.log(this.filesData);
      this.queuedFiles = Object.keys(data.Queued).map(function (key) {
        return data.Queued[key];
      });
      this.scannedFiles = Object.keys(data.ScanPerformed).map(function (key) {
        return data.ScanPerformed[key];
      });
      this.quarantineFiles = Object.keys(data.Quarantine).map(function (key) {
        return data.Quarantine[key];
      });
      // this.queuedFiles = Object.keys(data.Queued);
      console.log(this.queuedFiles);
      console.log(this.scannedFiles);
      console.log(this.quarantineFiles);
    });
  }
  public getData(): Observable<any> {
    return this.http.get('./assets/json/filedata.json');
  }

}
