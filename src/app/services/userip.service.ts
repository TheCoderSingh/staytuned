import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class UseripService {
    result;
    API_KEY = "f429b3296d8115a6ae890d89815ef5d18ec96a18b69da7efff06bd85";
    baseurl = "https://api.ipdata.co/";

    constructor(private http: HttpClient) {}

    async getUserIp(): Promise<any> {
        this.result = await this.http
            .get("http://api.ipify.org?format=json")
            .toPromise();
        return this.result["ip"];
    }

    getUserCountry(ipaddress) {
        return this.http
            .get(this.baseurl + ipaddress + "?api-key=" + this.API_KEY)
            .pipe(map(data => data["country_name"] || {}));
    }
}
