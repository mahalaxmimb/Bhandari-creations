import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BhandariCreations';
  currentRoute: string | any;

  constructor(private router: Router){
    this.currentRoute = "";
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            window.scrollTo(0,0)
        }

        if (event instanceof NavigationEnd) {
            this.currentRoute = event.url;
            // console.log(event);
        }

        if (event instanceof NavigationError) {
            console.log(event.error);
        }
    });
  }
}
