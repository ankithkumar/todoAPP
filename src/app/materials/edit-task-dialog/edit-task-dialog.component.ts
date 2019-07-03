import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss']
})
export class EditTaskDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log('dialog data')
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateVal(event) {
    if (event.keyCode === 13 && event.target.value != '' && event.target.value != null) {
      console.log('store val to the list ', event.target.value);
      this.dialogRef.close(event.target.value);
    }
  }
  
  ngOnInit() {
    this.dialogRef.updateSize('100%', '100%');
  }

}
