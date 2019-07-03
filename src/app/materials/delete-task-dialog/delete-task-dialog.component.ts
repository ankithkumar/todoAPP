import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.scss']
})
export class DeleteTaskDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log('dialog data', data);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  
  onYesClick(): void {
    this.dialogRef.close(true);
  }

  ngOnInit() {
    this.dialogRef.updateSize('100%', '100%');
  }

}
