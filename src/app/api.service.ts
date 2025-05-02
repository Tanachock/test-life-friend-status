import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiUrl = 'https://98c9-2001-fb1-2b-c403-f09a-4182-9ce7-9105.ngrok-free.app';
  CheckFriend(userId: string) {
    return this.http.post(`${this.apiUrl}/CheckFriend`, { userId: userId });
  }
  SaveUserAddFriend(event: any, userId: string) {
    return this.http.post(`${this.apiUrl}/SaveUserAddFriend`, { event: event, userId: userId });
  }

  SaveDataCondition(userID: string, event: string) {
    return this.http.post(`${this.apiUrl}/SaveDataCondition`, { userID: userID, event: event });
  }

  SaveUserCancelAddFriend(userID: string, event: string) {
    return this.http.post(`${this.apiUrl}/SaveUserCancelAddFriend`, { userID: userID, event: event });
  }
}
