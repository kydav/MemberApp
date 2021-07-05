import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Member } from './models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberDataService {
  apiUrl = 'https://randomuser.me/api/?results=50&inc=gender,name,email,location,dob,phone,picture&nat=us&seed=member';
  private ActiveMember: Member;
  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl).pipe(
      map((response: any) => response.results)
    );
  }

  setActiveMember(member: Member): void {
    this.ActiveMember = member;
  }

  getActiveMember(): Member {
    return this.ActiveMember;
  }



}

