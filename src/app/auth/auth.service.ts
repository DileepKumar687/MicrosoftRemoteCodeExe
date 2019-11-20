import { Injectable }
from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public  isloggededin =true;
  constructor() { }

  login(username:String ,
password : string)
  {
    if(username=="pratian" && password=="pratian@123"){
      this.isloggededin =true;
      return true;
  }
  else{
    return false;
  }
}}