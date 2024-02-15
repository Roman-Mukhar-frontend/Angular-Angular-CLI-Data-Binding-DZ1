import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson03',
  templateUrl: './lesson03.component.html',
  styleUrls: ['./lesson03.component.scss']
})
export class Lesson03Component implements OnInit {

  public taskName!: string;
  public taskObj!: {};
  public taskCount = 2;
  public inputEvent = false;


  constructor() { }

  ngOnInit(): void {

  }

  focusInput(): void {
    this.inputEvent = true;
  }

  focusBlur(): void {
    this.inputEvent = !this.inputEvent;
  }

    addTask(): void {
      this.taskCount +=1;
      this.taskObj = {
        name: this.taskName,
        status: false
      }
      this.taskName = '';


    
  }
  getData(data: number): void {
    this.taskCount = data;
  }
}
