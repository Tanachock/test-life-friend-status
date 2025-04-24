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
  title = 'LIFF';

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    (liff as any).init({
      liffId: '2007317200-7nLJVveG'
    }).then(() => {
      liff.getProfile().then((profile) => {
        this.CheckFriend(profile.userId);
      });
    });
  }

  CheckFriend(userId: string) {
    this.apiService.CheckFriend(userId).subscribe((res: any) => {
      console.log(res);
      if (res == "friend") {
        this.router.navigate(['/page1']);
      } else if (res == "not friend") {
        this.router.navigate(['/page2']);
      }
    });
  }
}
