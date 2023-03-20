import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component'
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component'

//page
import { LoginComponent } from './pages/login/login.component'
import { ContactComponent } from './pages/contact/contact.component'
import { HomeComponent } from './pages/home/home.component'
import { OtherPageComponent } from './pages/other-page/other-page.component'

//component
import { NavbarComponent } from './components/utils/navbar/navbar.component'
import { HomeComponent as homeC } from './components/home/home.component'
import { ContactComponent as contactC } from './components/contact/contact.component'
import { LoginComponent as loginC } from './components/login/login.component'
import { OtherComponent } from './components/other/other.component'

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    LoginLayoutComponent,
    LoginComponent,
    ContactComponent,
    HomeComponent,
    NavbarComponent,
    homeC,
    contactC,
    loginC,
    OtherComponent,
    OtherPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
