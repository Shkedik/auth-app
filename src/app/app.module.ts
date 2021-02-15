import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path        : 'app', 
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {   
    path: "**",
    redirectTo:"/app/auth/login",
    pathMatch: "full"
  }
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
