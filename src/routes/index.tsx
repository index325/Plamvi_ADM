import React, { useEffect } from "react";

import { Switch } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/product";

import { alertReset } from "../_redux/modules/alerts/actions";
import { loadUser } from "../_redux/modules/auth/actions";

import { IAlertState } from "../_redux/modules/alerts/types";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../_redux";
import { IAuthState } from "../_redux/modules/auth/types";
import Route from "./Route";
import { Dialog, Layout } from "@Components/UI";

const Routes: React.FC = () => {
  const dispatch = useDispatch();

  const message = useSelector<IState, IAlertState>((state) => state.alerts);
  const { customer } = useSelector<IState, IAuthState>((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (message.isDialog) {
      alert(message.message);
      dispatch(alertReset());
    }
  }, [message, dispatch]);

  console.log(customer);

  return (
    <Switch>
      <Route path="/" exact component={SignIn} user={customer} />
      <Layout>
        <Route
          path="/dashboard"
          component={Dashboard}
          user={customer}
          isPrivate
        />
      </Layout>
    </Switch>
  );
};

export default Routes;
