/**
 * Created by Hoang Ta Duy on 7/17/2017.
 */
import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {User} from "../../model/user.model";
import {SignupData} from "./signup.data";
@Component({
  templateUrl: 'signup.html'
})

export class SignupPage{
  pageData: SignupData;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageData = new SignupData();
  }

  get user(): User{
    return this.pageData.user;
  }

  createUser(user){

  }
}
