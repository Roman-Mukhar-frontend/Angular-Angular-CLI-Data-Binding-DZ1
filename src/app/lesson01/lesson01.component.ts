import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson01',
  templateUrl: './lesson01.component.html',
  styleUrls: ['./lesson01.component.scss']
})
export class Lesson01Component implements OnInit {

public placeholderOne = 'word here...';
public badWord = '';
public badWordsList = ''; 
public placeholderTwo = 'text here...';
public text = '';
public arrBadWords: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }



  btnAdd(): void {
    if (this.badWord == '') {
      this.placeholderOne = 'Please, write a word!';
    }
    else {
      if (this.badWordsList == '') {
        this.badWordsList = this.badWord
      }
      else {
        this.badWordsList = this.badWordsList + ',' + this.badWord
      }
      this.badWord = ''
      this.placeholderOne = 'word here...';
    }
  }
  btnReset(): void {
    location.reload();
  }
  btnCenzor(): void {
    if (this.text == '') {
      this.placeholderTwo = 'Please, write a text!';
    }
    else {
      this.arrBadWords = this.badWordsList.split(',')
      for (let i: number = 0; i < this.arrBadWords.length; i++) {
        let badW: string = this.arrBadWords[i];
        while (this.text.includes(badW)) {
          let word: string = "*";
          for (let a: number = 1; a < badW.length; a++) {
            word += "*";
          }
          this.text = this.text.replace(badW, word);
        }

      }
    }
  }

}
