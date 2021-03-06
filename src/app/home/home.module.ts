import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ScanReportComponent } from '../scan-report/scan-report.component';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { MalwareScanHomeComponent } from '../malware-scan-home/malware-scan-home.component';
import { BadgeComponent } from '../badge/badge.component';
import { CustomForDirective } from '../Directives/custom-for.directive';
import { MyForloopDirective } from '../Directives/Custom/my-forloop.directive';
import { StartWithPipe } from '../Pipes/StartsWithPipe';
import { HighlightDirective } from '../Directives/highlight.directive';
import { HeaderComponent } from '../header/header.component';
import { QueueComponent } from '../queue/queue.component';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ScanReportComponent,
    MalwareScanHomeComponent,
    FileUploaderComponent,
    BadgeComponent,
    CustomForDirective,
    MyForloopDirective,
    StartWithPipe,
    HighlightDirective,
    QueueComponent,
    HeaderComponent
    // FormsModule,
    // LoginComponent,
    // ReactiveFormsModule
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
  })]
})
export class HomeModule { }
