import React, { useEffect } from "react";

import { Switch } from "react-router-dom";

import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/product";
import ProductCreate from "../pages/product/create";

import { alertReset } from "../_redux/modules/alerts/actions";
import { loadUser } from "../_redux/modules/auth/actions";

import { IAlertState } from "../_redux/modules/alerts/types";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../_redux";
import { IAuthState } from "../_redux/modules/auth/types";
import Route from "./Route";
import { Layout } from "@Components/UI";
import { makeStyles } from "@material-ui/core";
import { SnackbarProvider, VariantType, useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const Routes: React.FC = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const providerRef = React.useRef();

  const message = useSelector<IState, IAlertState>((state) => state.alerts);
  const { customer } = useSelector<IState, IAuthState>((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (message.isDialog) {
      enqueueSnackbar(message.message, {
        variant: message.messageType,
      });
      dispatch(alertReset());
    }
  }, [message, dispatch, enqueueSnackbar]);

  return (
    <Switch>
      <Route path="/" exact component={SignIn} customer={customer} />
      <Layout>
        <Route
          path="/dashboard"
          component={Dashboard}
          customer={customer}
          isPrivate
        />
        <Route
          path="/products"
          exact
          component={Product}
          customer={customer}
          isPrivate
        />
        <Route
          path="/products/create"
          exact
          component={ProductCreate}
          customer={customer}
          isPrivate
        />
      </Layout>
    </Switch>
  );
};

export default Routes;
