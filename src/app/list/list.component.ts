import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberDataService } from '../member-data.service';
import { Member, ResponseObject } from '../models/member';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  members = new Array<Member>();
  constructor(
    private memberService: MemberDataService,
    private router: Router
    ) { }

  ngOnInit() {
    this.memberService.getMembers().subscribe(data => this.members = data);
  }

  memberClick(member: Member): void {
    this.memberService.setActiveMember(member);
    this.router.navigate(['member-detail', member.email]);
  }

}
