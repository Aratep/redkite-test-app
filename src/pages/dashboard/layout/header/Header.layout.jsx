import React from "react";
import { connect } from "react-redux";

// ACTIONS
import { userLogout } from "redux/auth/auth.actions";
import { resetHistoryLog } from "redux/statistics/statistics.actions";

const Header = ({ userLogout, userInfo, resetHistoryLog }) => {
   const onLogOut = () => {
      userLogout();
      resetHistoryLog();
   };

   return (
      <header>
         <span>{userInfo?.email}</span>
         <span onClick={onLogOut} className="log-out__button">
            Log Out
         </span>
      </header>
   );
};

const mapStateToProps = (state) => {
   const { auth } = state;
   return {
      userInfo: auth.userInfo,
   };
};

const mapDispatchToProps = (dispatch) => ({
   userLogout: () => dispatch(userLogout()),
   resetHistoryLog: () => dispatch(resetHistoryLog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
