import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './@shared/components/login/login.component';
import { LogoutComponent } from './@shared/components/logout/logout.component';
import { RegisterComponent } from './@shared/components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavbarComponent } from './@shared/components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './@shared/modules/angular-material/angular-material.module';
import { GiocaComponent } from './components/gioca-components/gioca/gioca.component';
import { FavoritesComponent } from './components/favorites-components/favorites/favorites.component';
import { MatCardModule } from '@angular/material/card';
import { RegistrationSuccessComponent } from './@shared/components/registration-success/registration-success.component';
import { GiocaItemComponent } from './components/gioca-components/gioca-item/gioca-item.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FavoritesItemComponent } from './components/favorites-components/favorites-item/favorites-item.component';
import { RatingsComponent } from './components/ratings-components/ratings/ratings.component';
import { RatingsItemComponent } from './components/ratings-components/ratings-item/ratings-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    LogoutComponent,
    NavbarComponent,
    WelcomeComponent,
    ProfileComponent,
    RankingsComponent,
    GiocaComponent,
    FavoritesComponent,
    RegistrationSuccessComponent,
    GiocaItemComponent,
    FavoritesItemComponent,
    RatingsComponent,
    RatingsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MatCardModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
