import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MemberDataService } from '../member-data.service';
import { Member } from '../models/member';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.sass']
})
export class MemberDetailComponent implements OnInit {

  activeMember: Member;
  constructor(private memberService: MemberDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let email = this.route.snapshot.paramMap.get('email');
    this.memberService.getMembers().subscribe(members => this.activeMember = members.find(member => member.email === email));
    //this.activeMember = this.memberService.getActiveMember();
    // if(!this.activeMember) {
    //   this.router.navigate(['list']);
    // }
  }

}
