import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import City from '../../models/city-model'

@Component({
  selector: 'content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit {

  city: City;

  constructor(
    public dialogRef: MatDialogRef<ContentCardComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: any) { 
    this.city = data; 
  }

  ngOnInit() {
  }

  closedialog(): void {
    this.dialogRef.close();
  }

}
