import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsComponent } from './apps.component';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes = [
  {
    path     : '',
    component: AppsComponent
  }
];

@NgModule({
  declarations: [
    AppsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatButtonModule,
    MatIconModule
  ]
})
export class AppsModule { }
