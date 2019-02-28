import { Component, OnInit } from "@angular/core";
import { HeadlinesfetcherService } from "src/app/services/headlinesfetcher.service";

@Component({
    selector: "app-headlines",
    templateUrl: "./headlines.component.html",
    styleUrls: ["./headlines.component.css"]
})
export class HeadlinesComponent implements OnInit {
    news;
    constructor(private headlinesfetcherservice: HeadlinesfetcherService) {}

    async ngOnInit() {
        await this.getHeadlines();
    }

    async getHeadlines() {
        this.news = await this.headlinesfetcherservice.fetchHeadlines();
    }
}
