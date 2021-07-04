import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { FilterComponent } from './filter/filter.component';
import { MemberDataService } from './member-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MemberDetailComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MemberDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
