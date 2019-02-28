import { HeadlinesfetcherService } from "./../../services/headlinesfetcher.service";
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-headlines",
    templateUrl: "./headlines.component.html",
    styleUrls: ["./headlines.component.css"]
})
export class HeadlinesComponent implements OnInit {
    news;
    // headines;
    constructor(private headlinesfetcherservice: HeadlinesfetcherService) {}

    async ngOnInit() {
        await this.getHeadlines();
    }

    async getHeadlines() {
        this.news = await this.headlinesfetcherservice.fetchHeadlines();
        // console.log(this.headlines["articles"]["0"]);
        // for (let i = 0; i < 10; i++) {
        // console.log(this.news["articles"][i.toString()]["title"]);
        // this.headlines += this.news["articles"][i.toString()]["title"];
        // }
        // console.log(this.news["title"]);
    }
}
