import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./features/home/home.component";
import { DrinksService } from "./features/drinks-list/services/drinks.service";
import { environment } from "../environments/environment";

import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { NotFoundComponent } from "./core/components/not-found/not-found.component";
import { FooterComponent } from "./core/components/footer/footer.component";
import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      registrationStrategy: "registerWhenStable:30000",
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    SwiperModule,
  ],
  providers: [DrinksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
