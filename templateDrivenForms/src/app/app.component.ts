import { Component } from '@angular/core';
import { User } from './Model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public topics: string[] = ["Angular", "React","Vue"];

  public userModel = new User("Rob", "rob@test.com", 1234689, "Vue", "morning", true);
}
