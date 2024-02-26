import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Page1Component } from './pages/page1/page1.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { ButtonComponent } from './components/button/button.component';
import { HederComponent } from './components/heder/heder.component';
import { SectionWithTitleComponent } from './components/section-with-title/section-with-title.component';
import { SubtitTitDescpComponent } from './components/subtit-tit-descp/subtit-tit-descp.component';
import { Page2Component } from './pages/page2/page2.component';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { Page3Component } from './pages/page3/page3.component';
import { PriceCardComponent } from './components/price-card/price-card.component';
import { Page4Component } from './pages/page4/page4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    Page1Component,
    TopBarComponent,
    BottomBarComponent,
    ButtonComponent,
    HederComponent,
    SectionWithTitleComponent,
    SubtitTitDescpComponent,
    Page2Component,
    PeopleCardComponent,
    Page3Component,
    PriceCardComponent,
    Page4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
