import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson04',
  templateUrl: './lesson04.component.html',
  styleUrls: ['./lesson04.component.scss']
})
export class Lesson04Component implements OnInit {

  public phoneKontactsArr = [
    {
      firstName: 'Ivan',
      lastName: 'Ivanov',
      number: '0971111111'
    },
    {
      firstName: 'Pavlo',
      lastName: 'Pavliv',
      number: '0972222222'
    },
    {
      firstName: 'Petro',
      lastName: 'Petriv',
      number: '0973333333'
    },
    {
      firstName: 'Taras',
      lastName: 'Andriiv',
      number: '0972112504'
    }
  ];
  public showModal = false;
  public indexTask!: number;
  public firstName!: string;
  public lastName!: string;
  public phoneNumber!: string;
  public addStatus!: boolean;
  public searchText = '';
  public mouseEvent = false;
  public inputEvent = false;
  public type = '';
  public typeForLastName = '';
  public typeForNumber = '';
  public count = 0;
  public statusSortName = false;
  public statusSortLaName = false;
  public statusSortNum = false;


  public phoneKontact = {
    firstName: '',
    lastName: '',
    number: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  focusInput(): void {
    this.inputEvent = true;
  }

  focusBlur(): void {
    this.inputEvent = !this.inputEvent;
  }

  addContact(): void {
    this.showModal = true;
    this.addStatus = true;
  }

  editUser(index: number): void {
    this.showModal = true;
    this.indexTask = index;
    this.firstName = this.phoneKontactsArr[index].firstName;
    this.lastName = this.phoneKontactsArr[index].lastName;
    this.phoneNumber = this.phoneKontactsArr[index].number;
  }

  deleteUser(index: number): void {
    this.phoneKontactsArr.splice(index, 1);
  }

  closeModal(): void {
    this.showModal = false;
    this.addStatus = false;
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
  }

  saveContact(): void {
    if (this.firstName && this.lastName && this.phoneNumber) {
      if (this.addStatus) {
        this.phoneKontact = {
          firstName: this.firstName,
          lastName: this.lastName,
          number: this.phoneNumber
        }
        this.phoneKontactsArr.push(this.phoneKontact);
      }
      else {
        this.phoneKontactsArr[this.indexTask].firstName = this.firstName;
        this.phoneKontactsArr[this.indexTask].lastName = this.lastName;
        this.phoneKontactsArr[this.indexTask].number = this.phoneNumber;
      }
      this.addStatus = false;
      this.showModal = false;
      this.firstName = '';
      this.lastName = '';
      this.phoneNumber = '';
    }
  }

  changeSortByName(): void {
    this.statusSortName = true;
    this.statusSortLaName = false;
    this.statusSortNum = false;
    this.count++;
    if (this.count % 2 === 0) {
      this.type = 'asc';
    }
    else {
      this.type = 'desc';
    }
  }
  changeSortByLastName(): void {
    this.statusSortName = false;
    this.statusSortLaName = true;
    this.statusSortNum = false;
    this.count++;
    if (this.count % 2 === 0) {
      this.typeForLastName = 'asc';
    }
    else {
      this.typeForLastName = 'desc';
    }
  }
  changeSortByNumber(): void {
    this.statusSortName = false;
    this.statusSortLaName = false;
    this.statusSortNum = true;
    this.count++;
    if (this.count % 2 === 0) {
      this.typeForNumber = 'asc';
    }
    else {
      this.typeForNumber = 'desc';
    }
  }

}
export interface PhoneKontact {
  firstName: string;
  lastName: string;
  number: string;
}
