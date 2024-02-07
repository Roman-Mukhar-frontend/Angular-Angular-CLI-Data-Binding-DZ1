import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() taskInfo!: any;
  @Output() taskCountfromChild = new EventEmitter<number>();

  public taskArr = [{ name: 'HTML', status: true }, { name: 'CSS', status: false }];
  public checkTask = true;
  public DeleteBtnStatus = false;
  public checkStatus!: boolean;
  public editUserBtn = false;
  public editTask!: string;
  public indexTask!: number;
  public mouseEvent = false;
  constructor() {

  }

  ngOnChanges(): void {
    if (this.taskInfo.name) {
      this.taskArr.push(this.taskInfo)
    }
  }


  ngOnInit(): void {
  }

  changeStatus(index: number): void {
    this.taskArr[index].status = !this.taskArr[index].status;
  }

  editUser(index: number): void {
    this.editUserBtn = true;
    this.editTask = this.taskArr[index].name;
    this.indexTask = index;
  }

  deleteUser(index: number): void {
    this.taskArr.splice(index, 1);
    this.taskCountfromChild.emit(this.taskArr.length)
  }

  saveEditTask(): void {
    this.taskArr[this.indexTask].name = this.editTask;
    this.editUserBtn = false;
    this.editTask = '';
  }

}
