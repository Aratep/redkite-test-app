import React from "react";
import { connect } from "react-redux";

// BASE COMPONENTS
import Notification from "components/notification/Notification.component";
// ROUTES
import AuthRoutes from "./pages/auth/AuthPages";
import DashbaordRoutes from "./pages/dashboard/DashboardPages";
//ACTIONS
import { setGlobalMessage } from "redux/common/common.actions";

function App(props) {
   const { token, globalMessage, setGlobalMessage } = props;

   const View = token ? <DashbaordRoutes /> : <AuthRoutes />;

   const handleNotificationClose = () => {
      setGlobalMessage(null);
   };

   return (
      <div className="App">
         <Notification
            message={globalMessage?.text}
            isOpened={!!globalMessage}
            delay={7000}
            severity={globalMessage?.severity}
            handleNotificationClose={handleNotificationClose}
            position={{ vertical: "top", horizontal: "center" }}
         />
         {View}
      </div>
   );
}

const mapStateToProps = (state) => {
   const { auth, common } = state;
   return {
      token: auth.token,
      globalMessage: common.globalMessage,
   };
};

const mapDispatchToProps = (dispatch) => ({
   setGlobalMessage: (message) => dispatch(setGlobalMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
