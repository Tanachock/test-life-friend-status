import { Component } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  addFriend() {
    liff.openWindow({
      url: 'https://line.me/R/ti/p/@893iaere',
      external: true
    });
  }
}
