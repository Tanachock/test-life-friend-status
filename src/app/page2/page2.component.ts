import { Component } from '@angular/core';
import liff from '@line/liff';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  event = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.event = params['event'];
    });
  }
  addFriend() {
    liff.openWindow({
      url: 'https://line.me/R/ti/p/@893iaere',
      external: false
    });

    //save ลง mongo event param
  }
}
