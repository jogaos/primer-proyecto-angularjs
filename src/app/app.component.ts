import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currentDate:String;
  headerClass = 'header';
  header = 'Programación web';
  menuList = ['Menú # 1', 'Menú # 2', 'Menú # 3', 'Menú # 4']
  textList = [{id:"1", text:'Lorem ipsum sit amet, consectetur adipiscing elit.'},
              {id:"2", text:'Lorem ipsum sit amet, consectetur adipiscing elit.'},
              {id:"3", text:'Lorem ipsum sit amet, consectetur adipiscing elit.'}]


  ngOnInit(){
    this.setCurrentDate();
  }

  setCurrentDate(){
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1; //January is 0!
    var year = today.getFullYear();

    var dd,mm;

    if (day < 10) {
      dd = '0' + day;
    } else {
      dd = day;
    }

    if (month < 10) {
      mm = '0' + month;
    }else {
      mm = month;
    }

    this.currentDate = dd + '/' + mm + '/' + year;
  }

}
