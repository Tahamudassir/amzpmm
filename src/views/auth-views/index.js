import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="page" />}>
      <Switch>
        <Route
          path="/login"
          component={lazy(() => import(`./authentication/login`))}
        />
        <Route
          path="/register"
          component={lazy(() => import(`./authentication/register-2`))}
        />
        <Route
          path="/products/public"
          component={lazy(() => import(`./products`))}
        />
        <Redirect from="*" to="/login" />
      </Switch>
    </Suspense>
  );
};

export default AppViews;
