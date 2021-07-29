import React from "react";
import { Route } from "react-router-dom";

const Handler = ({ PmComponent, PmmComponent, userType, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      userType === "PMM" ? (
        <PmmComponent {...props} />
      ) : (
        <PmmComponent {...props} />
      )
    }
  />
);

export default Handler;
