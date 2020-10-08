import { all, takeLatest, call, put } from "redux-saga/effects";

import { AxiosResponse } from "axios";
import { authRequest, authSuccess } from "./actions";
import { alertRequest } from "../alerts/actions";
import api from "../../../service";
import { ActionTypes, IAuthState } from "./types";

type AuthRequest = ReturnType<typeof authRequest>;

function* auth({ payload }: AuthRequest) {
  const { email, password } = payload;

  try {
    const authResponse: AxiosResponse<IAuthState> = yield call(() =>
      api.post("customers/sessions", { email, password })
    );

    yield put(
      authSuccess({
        customer: authResponse.data.customer,
        token: authResponse.data.token,
      })
    );
  } catch (error) {
    yield put(
      alertRequest({
        message: error.response.data.message,
        messageType: "danger",
        isDialog: true,
      })
    );
  }
}

export default all([takeLatest(ActionTypes.authRequest, auth)]);
