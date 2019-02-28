import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class HeadlinesfetcherService {
    result;
    headlines;
    url;
    API_KEY = "bdef3ef2d2aa4d2590035954dab74b69";
    baseurl = "https://newsapi.org/v2/top-headlines?country=";

    constructor(private http: HttpClient) {}

    async fetchHeadlines(): Promise<any> {
        this.url = this.baseurl + "in" + "&apiKey=" + this.API_KEY;
        this.result = await this.http.get(this.url).toPromise();
        return this.result["articles"];
    }
}
