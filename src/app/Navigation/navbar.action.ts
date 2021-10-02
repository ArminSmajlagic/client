import { Action } from "@ngrx/store";

export const LOGED_IN='LOGED_IN';
export const LOGED_OUT='LOGED_OUT';

export class loge_in implements Action{
  readonly type: string="LOGED_IN";
  public payload:boolean=true;
}
