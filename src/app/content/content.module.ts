import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentCardComponent } from './content-card/content-card.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ContentDetailComponent,
    ContentCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule
  ],
  exports: [ContentDetailComponent]
})
export class ContentModule { }
