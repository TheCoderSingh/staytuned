import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/common/header/header.component";
import { HomeComponent } from "./components/views/home/home.component";
import { UseripService } from "./services/userip.service";
import { HttpClientModule } from "@angular/common/http";
import { HeadlinesComponent } from "./components/headlines/headlines.component";
import { FooterComponent } from './components/common/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        HeadlinesComponent,
        FooterComponent
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [UseripService],
    bootstrap: [AppComponent]
})
export class AppModule {}
