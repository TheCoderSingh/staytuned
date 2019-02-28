import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class UseripService {
    result;
    ipaddress;
    country;
    countrycode;
    fetchedcountry = 0;
    API_KEY = "f429b3296d8115a6ae890d89815ef5d18ec96a18b69da7efff06bd85";
    baseurl = "https://api.ipdata.co/";

    constructor(private http: HttpClient) {}

    async getUserIp(): Promise<any> {
        this.result = await this.http
            .get("https://api.ipify.org?format=json")
            .toPromise();
        this.ipaddress = this.result["ip"];
        return this.result["ip"];
    }

    async getUserCountry(userip) {
        this.result = await this.http
            .get(this.baseurl + userip + "?api-key=" + this.API_KEY)
            .toPromise();
        this.country = this.result["country_name"];
        this.countrycode = this.result["country_code"];
        return this.result["country_name"];
    }
}
