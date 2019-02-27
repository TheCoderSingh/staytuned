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

    ngOnInit() {
        this.getIp();
    }

    getIp() {
        this.useripservice.getUserIp().subscribe(data => {
            this.userip = this.useripservice.getUserIp();
        });
    }
}
