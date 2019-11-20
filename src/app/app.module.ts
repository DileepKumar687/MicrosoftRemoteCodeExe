import 'reflect-metadata';
import '../polyfills';

import { BrowserModule }from '@angular/platform-browser';
import { NgModule }from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient, HTTP_INTERCEPTORS }from '@angular/common/http';
import { CoreModule }from './core/core.module';
import { SharedModule }from './shared/shared.module';
import { AppRoutingModule }from './app-routing.module';
// NG Translate
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader }from '@ngx-translate/http-loader';
import { HomeModule }from './home/home.module';
import { AppComponent }from './app.component';
import { AuthService }from './auth/auth.service';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';



  
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient)
 {
  return new TranslateHttpLoader(http,
'./assets/i18n/', 
'.json');
}

@NgModule({
  declarations: [AppComponent,FooterComponent,LoginComponent],
  imports: [
    BrowserModule,
  FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
  ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
AuthService    // { provide: HTTP_INTERCEPTORS, useClass: RemoveHeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}