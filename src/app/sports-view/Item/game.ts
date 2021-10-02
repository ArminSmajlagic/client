export class game{
  public id:number;
  public score:String;
  public team_1:String;
  public team_2:String;

  constructor(team_1:String,score:String,team_2:String,id:number) {
      this.score=score;
      this.team_1=team_1;
      this.team_2=team_2;
      this.id=id;
  }

  public static create(team_1:String,score:String,team_2:String,id:number):game{
    return new game(team_1,score,team_2,id);
  }

  // public set id(value:number){
  //   this.id=value;
  // }

  // public set score_setter(value:String){
  //   this.score=value;
  // }

  // public set team_1_seter(value:String){
  //   this.team_1=value;
  // }

  // public set team_2_seter(value:String){
  //   this.team_1=value;
  // }
}
