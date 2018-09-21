import { Component, OnInit } from '@angular/core';
import { IconsService } from '../shared/icons.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    icons: Array<string>

    constructor(private iconsService: IconsService) {}

    ngOnInit() {
        this.iconsService.getIcons()
        .subscribe(data => {
            console.log(data)
            this.icons = data
        })
    }
}