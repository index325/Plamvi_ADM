import { Reducer } from "redux";
import produce from "immer";
import { IAuthState, ActionTypes, ICustomer } from "./types";

const INITIAL_STATE: IAuthState = {
  token: "",
  customer: {} as ICustomer,
};

const auth: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.authSuccess: {
        const { customer, token } = action.payload;

        draft.customer = customer;
        draft.token = token;

        localStorage.setItem("Plamvi:Customer", JSON.stringify(customer));
        localStorage.setItem("Plamvi:Token", token);

        break;
      }

      case ActionTypes.logout: {
        draft.customer = {} as ICustomer;
        draft.token = "";

        localStorage.removeItem("Plamvi:Customer");
        localStorage.removeItem("Plamvi:Token");

        break;
      }

      case ActionTypes.loadUser: {
        const storagedCustomer = localStorage.getItem("Plamvi:Customer");
        const storagedToken = localStorage.getItem("Plamvi:Token");

        if (storagedCustomer) {
          const customer = JSON.parse(storagedCustomer);

          draft.customer = customer;
        }

        if (storagedToken) {
          const token = storagedToken;

          draft.token = token;
        }

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default auth;
