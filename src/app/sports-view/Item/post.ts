export class post{
  public id:number;
  public ime_prezime:String;
  public username:String;
  public wallet:number;

  constructor(ime_prezime:String,username:String,wallet:number,id:number) {
      this.ime_prezime=ime_prezime;
      this.username=username;
      this.wallet=wallet;
      this.id=id;
  }

  public static create(ime_prezime:String,username:String,wallet:number,id:number):post{
    return new post(ime_prezime,username,wallet,id);
  }

}
