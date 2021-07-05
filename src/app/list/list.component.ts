import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberDataService } from '../member-data.service';
import { Member } from '../models/member';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  members = new Array<Member>();
  originalMembers = new Array<Member>();
  setOriginalMembers = 0;
  constructor(
    private memberService: MemberDataService,
    private router: Router
    ) { }

  ngOnInit() {
    this.memberService.getMembers().subscribe(data => this.members = data);
  }

  memberClick(member: Member): void {
    this.router.navigate(['member-detail', member.email]);
  }

  search(event: any): void {
    if (this.setOriginalMembers < 1) {
      this.originalMembers = this.members;
      this.setOriginalMembers++;
    }
    this.members = this.originalMembers.filter((member: Member) =>
      `${member.name.first.toLowerCase()} ${member.name.last.toLowerCase()}`.includes(event.target.value));
  }


}
