import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './models/member';


@Injectable({
  providedIn: 'root'
})
export class MemberDataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  apiUrl = 'https://randomuser.me/api/?results=50&inc=gender,name,email,location,dob,phone,picture&nat=us&seed=member';

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member>{
    return this.http.get<Member>(this.apiUrl);

  }


}
