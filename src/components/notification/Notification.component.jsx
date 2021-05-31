import React from "react";

// MATERIAL UI COMPONENTS
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const Notification = (props) => {
   const {
      isOpened,
      message,
      delay,
      severity,
      handleNotificationClose,
      position,
   } = props;

   return (
      isOpened && (
         <Snackbar
            className="notification"
            open={true}
            anchorOrigin={{
               vertical: position.vertical,
               horizontal: position.horizontal,
            }}
            autoHideDuration={delay}
            onClose={handleNotificationClose}>
            <Alert
               onClose={handleNotificationClose}
               severity={severity}
               className="message">
               {message}
            </Alert>
         </Snackbar>
      )
   );
};

export default Notification;
