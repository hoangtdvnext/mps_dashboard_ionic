import {User} from "../../model/user.model";
/**
 * Created by Hoang Ta Duy on 7/17/2017.
 */
export class SignupData{
  constructor(){
    this.user = new User();
  }

  user: User;
}
