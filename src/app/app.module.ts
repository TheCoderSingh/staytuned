import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/common/header/header.component";
import { HomeComponent } from "./components/views/home/home.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { UseripService } from "./services/userip.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        SettingsComponent
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [UseripService],
    bootstrap: [AppComponent]
})
export class AppModule {}
