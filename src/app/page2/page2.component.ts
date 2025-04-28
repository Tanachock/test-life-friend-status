import { Component } from '@angular/core';
import liff from '@line/liff';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  event = "";

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    liff.getFriendship().then((status) => {
      if (status.friendFlag == true) {
        this.router.navigate(['/page1']);
      }
    });
  }

  addFriend() {
    liff.openWindow({
      url: 'https://line.me/R/ti/p/@893iaere',
      external: false
    });
  }
}
