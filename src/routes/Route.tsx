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
  user: IUser;
}

const Route: React.FC<ReactProps> = ({
  isPrivate = false,
  component: Component,
  user,
  ...rest
}) => {
  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user.name ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "dashboard",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
