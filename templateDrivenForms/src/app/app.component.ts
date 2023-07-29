import { Component } from '@angular/core';
import { User } from './Model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public topics: string[] = ["Angular", "React","Vue"];

 public topicHasError:boolean = true;

  public userModel = new User("Rob", "rob@test.com", 1234567890, "default", "morning", true);

  public validateTopic(value: string){
    if(value === "default"){
      this.topicHasError = true;
    }else {
      this.topicHasError = false;
    }
  }
}
