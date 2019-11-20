import { Component } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import { ScanReportService } from './core/Report/scan-report.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flag:boolean = true;
  constructor(
    public electronService: ElectronService,
    private translate: TranslateService
    ) {
      
    }
}
