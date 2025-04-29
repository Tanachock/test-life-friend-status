import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiUrl = 'https://6cb6-2001-fb1-2a-dca0-882-e251-ef79-3137.ngrok-free.app';
  CheckFriend(userId: string) {
    return this.http.post(`${this.apiUrl}/CheckFriend`, { userId: userId });
  }
  SaveUserAddFriend(event: any, userId: string) {
    return this.http.post(`${this.apiUrl}/SaveUserAddFriend`, { event: event, userId: userId });
  }

  // SaveData(userID: string, event: string) {
  //   return this.http.post(`${this.apiUrl}/SaveData`, { userID: userID, event: event });
  // }

  SaveUserCancelAddFriend(userID: string, event: string) {
    return this.http.post(`${this.apiUrl}/SaveUserCancelAddFriend`, { userID: userID, event: event });
  }
}
