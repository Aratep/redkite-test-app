import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// AUTH PAGES
import LoginPage from "pages/auth/login/Login.page";

const AuthPages = () => {
   return (
      <Switch>
         <Route exact path="/login" component={LoginPage} />
         <Redirect to="/login" />
      </Switch>
   );
};

export default AuthPages;
