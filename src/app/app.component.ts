import { Component } from '@angular/core';
import liff from '@line/liff';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    console.log(liff);
    liff.init({
      liffId: '2007317200-7nLJVveG'
    }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login();
      }else{
        liff.getProfile().then((profile) => {
          this.CheckFriend(profile.userId);
        });
      }
    });
  }

  CheckFriend(userId: string) {
    console.log(userId);
    this.apiService.CheckFriend(userId).subscribe((res: any) => {
      console.log(res);
      if (res.status == "friend") {
        this.router.navigate(['/page1'], { replaceUrl: true });
      } else if (res.status == "not friend") {
        this.router.navigate(['/page2'], { replaceUrl: true });
      }
    });
  }
}
