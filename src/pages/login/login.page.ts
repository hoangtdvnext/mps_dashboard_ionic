/**
 * Created by Hoang Ta Duy on 7/17/2017.
 */
import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {LoginData} from "./login.data";
import {User} from "../../model/user.model";
@Component({
  templateUrl: 'login.html'
})

export class LoginPage{
  pageData: LoginData;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageData = new LoginData();
  }

  get user(): User{
    return this.pageData.user;
  }

  signIn(){

  }

  reSet(){

  }
}
