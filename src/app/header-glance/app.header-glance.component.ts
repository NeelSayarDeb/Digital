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
        switch (this.monthValue) {
            case 0:
                this.month = "Jan"
                break;
            case 1:
                this.month = "Feb"
                break;
            case 2:
                this.month = "Mar"
                break;
            case 3:
                this.month = "Apr"
                break;
            case 4:
                this.month = "May"
                break;
            case 5:
                this.month = "Jun"
                break;
            case 6:
                this.month = "Jul"
                break;
            case 7:
                this.month = "Aug"
                break;
            case 8:
                this.month = "Sep"
                break;
            case 9:
                this.month = "Oct"
                break;
            case 10:
                this.month = "Nov"
                break;
            case 11:
                this.month = "Dec"
                break;
            default:
                break;
        }
        this.year = d.getFullYear();
    }
    
}
