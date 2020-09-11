import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }
  login(body){
    if(body.recnumber=="9123416411" && body.password=="9123416411"){
      alert('Login..... Successsful')
      return true;
    }
    else{
      return false;
    }
  }
    register(){
      return{
        'msg' : 'register successful'
      }
    }
  }

