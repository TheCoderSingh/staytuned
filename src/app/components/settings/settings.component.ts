import { Component, OnInit } from "@angular/core";
import { UseripService } from "./../../services/userip.service";

@Component({
    selector: "app-settings",
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
    userip;
    constructor(private useripservice: UseripService) {}

    async ngOnInit() {
        await this.getIp();
    }

    async getIp() {
        this.userip = await this.useripservice.getUserIp();
    }
}
