import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// DASHBOARD PAGES
import StatisticsPage from "pages/dashboard/satistics/Statistics.page";
// LAYOUTS
import Header from "./layout/header/Header.layout";

const DashbaordPages = () => {
   return (
      <div>
         <Header />
         <Switch>
            <Route exact path="/statistics" component={StatisticsPage} />
            <Redirect to="/statistics" />
         </Switch>
      </div>
   );
};

export default DashbaordPages;
