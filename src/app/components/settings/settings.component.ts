import { Component, OnInit } from "@angular/core";
import { UseripService } from "./../../services/userip.service";

@Component({
    selector: "app-settings",
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
    userip;
    usercountry;
    changedcountry;
    constructor(private useripservice: UseripService) {}

    async ngOnInit() {
        await this.getIp();
        await this.getCountry();
        console.log(this.userip);
        console.log(this.usercountry);
    }

    async getIp() {
        this.userip = await this.useripservice.getUserIp();
    }

    async getCountry() {
        this.usercountry = await this.useripservice.getUserCountry(this.userip);
    }

    onCountryChange(country) {
        this.changedcountry = country;
        if (this.changedcountry == "Select Location") {
            this.changedcountry = null;
        } else {
            this.changedcountry = country;
        }
        console.log(country);
    }
}
