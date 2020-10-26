import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms'

export interface UsersData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css']
})
export class DialogPopupComponent {
  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogPopupComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  // validation
  todo = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.todo.hasError('required')) {
      return 'You must enter a value';
      }
    }

  doAction(){
    if (this.todo.hasError('required')) {
        return '';
      }
    else{
      this.dialogRef.close({event:this.action,data:this.local_data});
    }
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}