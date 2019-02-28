import { HeadlinesfetcherService } from "src/app/services/headlinesfetcher.service";
import { Component, OnInit } from "@angular/core";
import { UseripService } from "src/app/services/userip.service";

@Component({
    selector: "app-headlines",
    templateUrl: "./headlines.component.html",
    styleUrls: ["./headlines.component.css"]
})
export class HeadlinesComponent implements OnInit {
    news;
    userip;
    userinfo;
    usercountry;
    usercountrycode;
    changedcountry;
    constructor(private useripservice: UseripService) {}

    async ngOnInit() {
        await this.getIp();
        await this.getCountry();
        await this.getHeadlines();
        console.log(this.userip);
        console.log(this.usercountry);
        console.log(this.usercountrycode);
    }

    async getIp() {
        this.userip = await this.useripservice.getUserIp();
    }

    async getCountry() {
        this.userinfo = await this.useripservice.getUserCountry(this.userip);
        this.usercountry = this.userinfo["country_name"];
        this.usercountrycode = this.userinfo["country_code"];
    }

    async getHeadlines() {
        this.news = await this.useripservice.fetchHeadlines();
    }

    onCountryChange(changedcountry) {
        if (changedcountry != "Select Location") {
            this.useripservice.country = changedcountry;
            this.usercountry = changedcountry;
            this.changedcountry = changedcountry;

            console.log(changedcountry);

            if (changedcountry == "Argentina")
                this.useripservice.countrycode = "ar";
            else if (changedcountry == "Australia")
                this.useripservice.countrycode = "au";
            else if (changedcountry == "Austria")
                this.useripservice.countrycode = "at";
            else if (changedcountry == "Belgium")
                this.useripservice.countrycode = "be";
            else if (changedcountry == "Brazil")
                this.useripservice.countrycode = "br";
            else if (changedcountry == "Bulgaria")
                this.useripservice.countrycode = "bg";
            else if (changedcountry == "Canada")
                this.useripservice.countrycode = "ca";
            else if (changedcountry == "China")
                this.useripservice.countrycode = "cn";
            else if (changedcountry == "Colombia")
                this.useripservice.countrycode = "co";
            else if (changedcountry == "Cuba")
                this.useripservice.countrycode = "cu";
            else if (changedcountry == "Czech Republic")
                this.useripservice.countrycode = "cz";
            else if (changedcountry == "Egypt")
                this.useripservice.countrycode = "eg";
            else if (changedcountry == "France")
                this.useripservice.countrycode = "fr";
            else if (changedcountry == "Germany")
                this.useripservice.countrycode = "de";
            else if (changedcountry == "Greece")
                this.useripservice.countrycode = "gr";
            else if (changedcountry == "Hong Kong")
                this.useripservice.countrycode = "hk";
            else if (changedcountry == "Hungary")
                this.useripservice.countrycode = "hu";
            else if (changedcountry == "India")
                this.useripservice.countrycode = "in";
            else if (changedcountry == "Indonesia")
                this.useripservice.countrycode = "id";
            else if (changedcountry == "Ireland")
                this.useripservice.countrycode = "ie";
            else if (changedcountry == "Israel")
                this.useripservice.countrycode = "il";
            else if (changedcountry == "Italy")
                this.useripservice.countrycode = "it";
            else if (changedcountry == "Japan")
                this.useripservice.countrycode = "jp";
            else if (changedcountry == "Latvia")
                this.useripservice.countrycode = "lv";
            else if (changedcountry == "Lithuania")
                this.useripservice.countrycode = "lt";
            else if (changedcountry == "Malaysia")
                this.useripservice.countrycode = "my";
            else if (changedcountry == "Mexico")
                this.useripservice.countrycode = "mx";
            else if (changedcountry == "Morocco")
                this.useripservice.countrycode = "ma";
            else if (changedcountry == "Netherlands")
                this.useripservice.countrycode = "nl";
            else if (changedcountry == "New Zealand")
                this.useripservice.countrycode = "nz";
            else if (changedcountry == "Nigeria")
                this.useripservice.countrycode = "ng";
            else if (changedcountry == "Norway")
                this.useripservice.countrycode = "no";
            else if (changedcountry == "Philippines")
                this.useripservice.countrycode = "ph";
            else if (changedcountry == "Poland")
                this.useripservice.countrycode = "pl";
            else if (changedcountry == "Portugal")
                this.useripservice.countrycode = "pt";
            else if (changedcountry == "Romania")
                this.useripservice.countrycode = "ro";
            else if (changedcountry == "Russia")
                this.useripservice.countrycode = "ru";
            else if (changedcountry == "Saudi Arabia")
                this.useripservice.countrycode = "sa";
            else if (changedcountry == "Serbia")
                this.useripservice.countrycode = "rs";
            else if (changedcountry == "Singapore")
                this.useripservice.countrycode = "sg";
            else if (changedcountry == "Slovakia")
                this.useripservice.countrycode = "sk";
            else if (changedcountry == "Slovenia")
                this.useripservice.countrycode = "si";
            else if (changedcountry == "South Africa")
                this.useripservice.countrycode = "za";
            else if (changedcountry == "South Korea")
                this.useripservice.countrycode = "kr";
            else if (changedcountry == "Sweden")
                this.useripservice.countrycode = "se";
            else if (changedcountry == "Switzerland")
                this.useripservice.countrycode = "ch";
            else if (changedcountry == "Taiwan")
                this.useripservice.countrycode = "tw";
            else if (changedcountry == "Thailand")
                this.useripservice.countrycode = "th";
            else if (changedcountry == "Turkey")
                this.useripservice.countrycode = "tr";
            else if (changedcountry == "UAE")
                this.useripservice.countrycode = "ae";
            else if (changedcountry == "Ukraine")
                this.useripservice.countrycode = "ua";
            else if (changedcountry == "United Kingdom")
                this.useripservice.countrycode = "gb";
            else if (changedcountry == "United States")
                this.useripservice.countrycode = "us";
            else if (changedcountry == "Venuzuela")
                this.useripservice.countrycode = "ve";

            this.getHeadlines();
            console.log(changedcountry);
        } else {
        }
    }
}
