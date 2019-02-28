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
    headlines;
    url;
    url2;

    API_KEY1 = "f429b3296d8115a6ae890d89815ef5d18ec96a18b69da7efff06bd85";
    baseurl1 = "https://api.ipdata.co/";

    API_KEY2 = "bdef3ef2d2aa4d2590035954dab74b69";
    baseurl2 = "https://newsapi.org/v2/top-headlines?country=";

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
            .get(this.baseurl1 + userip + "?api-key=" + this.API_KEY1)
            .toPromise();
        this.country = this.result["country_name"];
        this.countrycode = this.result["country_code"];
        return this.result;
    }

    async fetchHeadlines(): Promise<any> {
        this.url2 =
            this.baseurl2 + this.countrycode + "&apiKey=" + this.API_KEY2;
        this.result = await this.http.get(this.url2).toPromise();
        return this.result["articles"];
    }
}
