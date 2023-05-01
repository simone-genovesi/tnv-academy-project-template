import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./@core/helpers/auth-guard";
import { LoginComponent } from "./@shared/components/login/login.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { RegisterComponent } from "./@shared/components/register/register.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RankingsComponent } from "./components/ranking-components/rankings/rankings.component";
import { GiocaComponent } from "./components/gioca-components/gioca/gioca.component";
import { FavoritesComponent } from "./components/favorites-components/favorites/favorites.component";
import { RegistrationSuccessComponent } from "./@shared/components/registration-success/registration-success.component";
import { FineGiocaComponent } from "./components/gioca-components/fine-gioca/fine-gioca.component";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "welcome", component: WelcomeComponent },
      { path: "profile", component: ProfileComponent },
      { path: "rankings", component: RankingsComponent },
      { path: "start", component: GiocaComponent },
      { path: "end", component: FineGiocaComponent },
      { path: "favorites", component: FavoritesComponent },
      { path: "", redirectTo: "welcome", pathMatch: 'full' },
    ],
  },
  {
    path: "login",
    component: LoginComponent,
  },
  { path: "registration-success", 
    component: RegistrationSuccessComponent },
  {
    path: "register",
    component: RegisterComponent,
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
