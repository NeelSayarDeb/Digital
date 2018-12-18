import { Component } from '@angular/core';

@Component({
    selector: 'app-header-glance',
    templateUrl: './app-header-glance.component.html',
    styleUrls: ['./app-header-glance.component.css']
})
export class AppHeaderGlanceComponent {
    public date;
    public month;
    public monthValue;
    public year;
    ngOnInit(){
        let d = new Date();
        this.date = d.getDate();
        this.monthValue = d.getMonth();
        this.year = d.getFullYear();
    }
}
