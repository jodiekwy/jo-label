import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import City from '../../models/city-model'
import { Cities } from '../../data/city-data'
import { ContentCardComponent } from '../content-card/content-card.component'

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  @Input()
  cities : City[] = Cities;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(id: number) {
    let dialogRef = this.dialog.open(ContentCardComponent, {
      maxHeight : 'initial',
      height: '100%',
      data : this.cities[id]
    });
  
    dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
    });
  }

}
