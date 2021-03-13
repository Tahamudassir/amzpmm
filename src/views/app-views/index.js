import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from "components/shared-components/Loading";

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path="/home" component={lazy(() => import(`./home`))} />
        <Route
          path={`/reservations`}
          component={lazy(() => import("./reservations"))}
        />
        <Route
          path={"/create-order/:id"}
          component={lazy(() => import("./reservations/createOrder"))}
        />
        <Route
          path={`/products`}
          component={lazy(() => import(`./products`))}
        />
        <Route path="/orders" component={lazy(() => import(`./orders`))} />
        <Route
          path="/create-excel"
          component={lazy(() => import(`./createExcel`))}
        />
        <Route path="/rules" component={lazy(() => import(`./tutorial`))} />
        <Route
          path="/order-detail/:id"
          component={lazy(() => import(`./orders/orderDetailPmm`))}
        />
        <Route
          path="/change-password"
          component={lazy(() => import(`./changePassword`))}
        />
        <Route
          path="/product-details/:id"
          component={lazy(() => import(`./products/productDetails`))}
        />
        <Route
          path={`/add-product`}
          component={lazy(() => import(`./addProduct`))}
        />
        <Route path="/profile" component={lazy(() => import(`./profile`))} />

        <Redirect from={`*`} to={`/home`} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
