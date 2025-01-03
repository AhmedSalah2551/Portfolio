import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent  {
  result :any[] = []
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DetailsComponent>) {
      this.result = [data]
    }
  onClose(): void {
    this.dialogRef.close();
  }
  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
