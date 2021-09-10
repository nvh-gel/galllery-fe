import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CarouselModule} from "ngx-owl-carousel-o";
import * as Core from './component/core/core';
import * as Section from './component/section/section';
import * as Page from './page/page';

@NgModule({
  declarations: [
    AppComponent,
    Page.HomeComponent,
    Page.ContactComponent,
    Page.GalleryComponent,
    Page.AboutComponent,
    Page.BlogComponent,
    Section.HeaderComponent,
    Section.MenuContentComponent,
    Section.MainMenuComponent,
    Section.FooterComponent,
    Section.GridComponent,
    Section.HeroComponent,
    Section.ShowCaseComponent,
    Section.ShowCaseQuoteComponent,
    Section.ShowCaseContentComponent,
    Section.CallToActionComponent,
    Core.LogoComponent,
    Core.SocialLinkComponent,
    Core.MenuButtonComponent,
    Core.PreloadComponent,
    Core.ScrollComponent,
    Core.HeroSlideComponent,
    Core.ShowCaseArticleComponent,
    Core.ButtonComponent,
    Core.BackendContentComponent,
    Core.BackendDotComponent,
    Core.BackendTextComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
