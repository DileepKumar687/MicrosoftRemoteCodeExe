import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ScanReportComponent } from '../scan-report/scan-report.component';
import { MalwareScanHomeComponent } from '../malware-scan-home/malware-scan-home.component';
import { LoginComponent } from '../login/login.component';
import { QueueComponent } from '../queue/queue.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'report',
    component: ScanReportComponent
  },
  {
    path: 'homepage',
    component: MalwareScanHomeComponent
  },
  {
    path:'queue',
    component: QueueComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
