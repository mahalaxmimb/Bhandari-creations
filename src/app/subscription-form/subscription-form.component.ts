import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribersService } from '../services/subscribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {
  isEmailError : boolean = false;
  isSubscribed: boolean= false;
  constructor(private subService: SubscribersService) { }

  ngOnInit(): void {
  }

  onSubmit(formVal: any) {
    const subData: Sub = {
      name: formVal.name,
      email: formVal.email
    }

    this.subService.checkSubs(subData.email).subscribe(val => {
      if (val.empty) {
        this.isSubscribed = true;
        this.subService.addSubs(subData);
      } else {
        console.log("Email Address already subscribed");
        this.isEmailError = true;
      }

    })
  }
}
