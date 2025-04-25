import { Component } from '@angular/core';
import liff from '@line/liff';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  event = "";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.event = params['event'];
    });

    liff.getFriendship().then((status) => {
      if (status.friendFlag == true) {
        this.router.navigate(['/page1'], { queryParams: { event: this.event } });
      }
    });
  }
  // addFriend() {
  //   liff.openWindow({
  //     url: 'https://line.me/R/ti/p/@893iaere',
  //     external: false
  //   });
  //   liff.getFriendship().then((status) => {
  //     if (status.friendFlag == true) {
  //       liff.openWindow({
  //         url: 'https://liff.line.me/2007317200-7nLJVveG?event=' + this.event,
  //         external: false
  //       });
  //     }
  //   });
  // }

  addFriend() {
    liff.openWindow({
      url: 'https://line.me/R/ti/p/@893iaere',
      external: true
    });

    alert('หลังจากเพิ่มเพื่อนเสร็จแล้ว กรุณากลับมายังแอป LIFF เพื่อดำเนินการต่อ');
  }
}
