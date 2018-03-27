import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { ApiService, HeaderComponent, SharedModule, UserService } from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    HomeModule,
    rootRouting,
    SharedModule
  ],
  providers: [
    ApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
