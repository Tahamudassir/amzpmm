import React, { Suspense } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from "components/shared-components/Loading";
import AppLayout from "./layouts/app-layout";
import AuthLayout from "./layouts/auth-layout";
import history from "./history";

function Routes(props) {
  const { authenticated } = props;
  return (
    <Suspense fallback={<Loading cover="page" />}>
      <Router history={history}>
        {authenticated ? <AppLayout /> : <AuthLayout />}
      </Router>
    </Suspense>
  );
}
const mapStateToProps = ({ auth }) => {
  const { authenticated } = auth;
  return { authenticated };
};

export default connect(mapStateToProps)(Routes);
