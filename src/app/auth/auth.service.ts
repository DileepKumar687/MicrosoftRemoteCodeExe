import { Injectable }
from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


public  isloggededin =true;
public Lusername : string;
  constructor() { }

  login(username:String ,
password : string)
  {
    if(username=="aa" && password=="aa"){
      this.isloggededin =true;
        this.Lusername=username.toString();
      return true;
  }
  else{
    return false;
  }
}}