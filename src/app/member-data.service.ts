import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { restoreView } from '@angular/core/src/render3';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators'
import { Member, ResponseObject } from './models/member';


@Injectable({
  providedIn: 'root'
})
export class MemberDataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  apiUrl = 'https://randomuser.me/api/?results=50&inc=gender,name,email,location,dob,phone,picture&nat=us&seed=member';
  private ActiveMember: Member;
  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl).pipe(
      map((response: any) =>
      { return response.results})
    );
  }

  setActiveMember(member:Member): void {
    this.ActiveMember = member;
  }

  getActiveMember(): Member {
    return this.ActiveMember;
  }



}

