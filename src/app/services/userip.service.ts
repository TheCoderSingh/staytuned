import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class UseripService {
    constructor(private http: HttpClient) {}

    getUserIp() {
        return this.http
            .get("http://api.ipify.org?format=json")
            .pipe(map(data => data["ip"] || {}));
    }
}
