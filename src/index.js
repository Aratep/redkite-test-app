import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// MAIN APP COMPONENT
import App from "./App";

// REDUX TOOLS
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
// STYLES
import "./index.scss";
// REPORT WEB VITALS
import reportWebVitals from "./reportWebVitals";

const theme = createMuiTheme({
   typography: { fontSize: 20 },
});

ReactDOM.render(
   <Provider store={store}>
      <BrowserRouter>
         <PersistGate persistor={persistor}>
            <ThemeProvider theme={theme}>
               <App />
            </ThemeProvider>
         </PersistGate>
      </BrowserRouter>
   </Provider>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
