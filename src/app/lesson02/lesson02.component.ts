// Потрібно реалізувати функціонал як на відео AngularUsersList, а саме:
// +1. При кліку на кнопку Add user запускаєте функцію addUser() яка робить наступне:
// +Стягуєте дані з полів і формує об’єкт.
// +Цей об’єкт пушитю в масив.
// +Поля зачищає.
// +Запускаєм функцію render() яка генерую всю інфу в таблицю відносно вашого масиву.
// +2. При кліку на кнопку Delete запускаєте функцію deleteUser() яка робить наступне:
// +Дізнаєтеся в якому рядку ви клікнули(тобто індекс).
// +По цьому індексу видаляємо елемент з масиву.
// +Запускаєм заново функцію render().
// +3. При кліку на кнопку Edit запускаєте функцію editUser() яка робить наступне:
// +Дізнаєтеся в якому рядку ви клікнули(тобто індекс).
// +По цьому індексу витягуємо конкретрний елемент(тобто об’єкт) з масиву.
// +З об’єкт достаємо дані і передаємо в форму(тобто у value інпутів).
// +Запам’ятовуємо даний індекс в змінну userIndex.
// +Показуємо кнопку Edit user і приховуємо Add user.
// +4. При кліку на кнопку Edit User запускаєте функцію saveEditUser() яка робить наступне:
// +Стягуєте дані з полів і формує об’єкт через клас.
// +Цей об’єкт додається на місце старого об’єкту через userIndex.
// +Поля зачищає.
// +Запускаєм функцію render() яка генерую всю інфу в таблицю відносно вашого масиву.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson02',
  templateUrl: './lesson02.component.html',
  styleUrls: ['./lesson02.component.scss']
})

export class Lesson02Component implements OnInit {

  public login!: string;
  public password!: string;
  public email!: string;
  public user!: {};
  public usersArr: any[] = [];
  public usersPushArr: any[] = [];
  public EditButtonStatus = false;
  public userIndex!: number;

  constructor() { }

  ngOnInit(): void {
  }
  checkData(): void {
    if (!this.login && !this.password && !this.email) {
      console.log('-')
    }
  }

  addUser(): void {
    if (this.login && this.password && this.email) {
      this.user = {
        login: this.login,
        pass: this.password,
        email: this.email
      };
      this.usersArr.push(this.user);
      this.login = '';
      this.password = '';
      this.email = '';
      this.render();
    }
  }

  render(): void {
    this.usersPushArr = this.usersArr;
  }

  saveEditUser(): void {
    if (this.login && this.password && this.email) {
      this.EditButtonStatus = false;
      this.usersArr[this.userIndex].login = this.login;
      this.usersArr[this.userIndex].pass = this.password;
      this.usersArr[this.userIndex].email = this.email;
      this.login = '';
      this.password = '';
      this.email = '';
      this.render();
    }
  }

  editUser(index: number): void {
    this.login = this.usersArr[index].login;
    this.password = this.usersArr[index].pass;
    this.email = this.usersArr[index].email;
    this.userIndex = index;
    this.EditButtonStatus = true;
  }

  deleteUser(index: number): void {
    this.usersArr.splice(index, 1);
    this.render();
  }

}
