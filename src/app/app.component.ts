import { Component } from '@angular/core';
import liff from '@line/liff';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  event = "";

  constructor(private router: Router, private apiService: ApiService, private route: ActivatedRoute) { }

  // ngOnInit() {
  //   console.log(liff);
  //   liff.init({
  //     liffId: '2007317200-7nLJVveG'
  //   }).then(() => {
  //     if (!liff.isLoggedIn()) {
  //       liff.login();
  //     }else{
  //       liff.getProfile().then((profile) => {
  //         this.CheckFriend(profile.userId);
  //       });
  //     }
  //   });

  //   this.route.queryParams.subscribe(params => {
  //     this.event = params['event'];
  //     console.log(this.event);
  //   });
  // }


  ngOnInit() {
    console.log(liff);
    liff.init({
      liffId: '2007317200-7nLJVveG'
    }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login();
      }else{
        liff.getFriendship().then((status: any) => {
          console.log(status);
          liff.getProfile().then((profile) => {
            this.CheckFriend(status, profile.userId);
          });
        });
      }
    });
    this.route.queryParams.subscribe(params => {
      this.event = params['event'];
      console.log(this.event);
    });
  }

  CheckFriend(status: any, userId: string) {
    console.log(userId);
    console.log("status", status.friendFlag);
    if (status.friendFlag == true) {
      this.router.navigate(['/page1'], { replaceUrl: true });
      //save ลง mongo event param
      console.log("Add Friend");
      console.log(this.event);
      console.log(userId);
      this.apiService.SaveData(userId, this.event).subscribe((res: any) => {
        console.log(res);
      });
      // this.apiService.SaveEvent(this.event, userId).subscribe((res: any) => {
      //   console.log(res);
      // });
    } else if (status.friendFlag == false) {
      this.router.navigate(['/page2'], { replaceUrl: true });
      console.log("Not Add Friend");
      console.log(userId);
      console.log(this.event);
      this.apiService.SaveData(userId, this.event).subscribe((res: any) => {
        console.log(res);
      });
      this.apiService.SaveUserCancelAddFriend(userId, this.event).subscribe((res: any) => {
        console.log(res);
      });
    }
  }
}
