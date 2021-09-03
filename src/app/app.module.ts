import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LogoComponent } from './component/core/logo/logo.component';
import { MenuContentComponent } from './component/menu-content/menu-content.component';
import { SocialLinkComponent } from './component/core/social-link/social-link.component';
import { MenuButtonComponent } from './component/core/menu-button/menu-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    MenuContentComponent,
    SocialLinkComponent,
    MenuButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
