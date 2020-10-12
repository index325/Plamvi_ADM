import React from "react";
import {
  RouteProps as ReactDomRouteProps,
  Route as ReactDomRoute,
  Redirect,
} from "react-router-dom";

import { IUser } from "../interfaces";

interface ReactProps extends ReactDomRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
  customer: IUser;
}

const Route: React.FC<ReactProps> = ({
  isPrivate = false,
  component: Component,
  customer,
  ...rest
}) => {
  console.log(isPrivate === !!customer.name);
  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!customer.name ? (
          <Component />
        ) : (
          <div></div>
          // <Redirect
          //   to={{
          //     pathname: isPrivate ? "/" : "dashboard",
          //     state: { from: location },
          //   }}
          // />
        );
      }}
    />
  );
};

export default Route;
