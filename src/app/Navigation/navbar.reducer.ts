import { Action } from "@ngrx/store";
import * as navbar_actions from "./navbar.action";
import { LOGED_OUT } from "./navbar.action";
const logedState={logedIn:true};

export function navbarReducer(state = logedState,action:navbar_actions.loge_in){
  switch(action.type){
    case navbar_actions.LOGED_IN:
      return {state:action.payload}
    }
  return false;
}
