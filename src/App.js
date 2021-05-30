import React from "react";
import { connect } from "react-redux";

// ROUTES
import AuthRoutes from "./pages/auth/AuthPages";
import DashbaordRoutes from "./pages/dashboard/DashboardPages";

function App(props) {
   const { token } = props;

   const View = token ? <DashbaordRoutes /> : <AuthRoutes />;

   return <div className="App">{View}</div>;
}

const mapStateToProps = (state) => {
   const { auth } = state;
   return {
      token: auth.token,
   };
};

export default connect(mapStateToProps, null)(App);
