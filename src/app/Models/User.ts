export class User{
  username:string;
  password:string;
  token:string;
  expires:string;
  constructor(username:string,password:string,token:string,expires:string) {
    this.username=username;
    this.password=password;
    this.token=token;
    this.expires=expires;
  }
}
