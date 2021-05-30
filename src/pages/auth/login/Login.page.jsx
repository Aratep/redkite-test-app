import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

//BASE COMPONENTS
import GridItem from "components/grid-item/GridItem.component";
import Input from "components/input/Input.component";
import Button from "components/button/Button.component";

//EFFECTS
import useInput from "effects/useInput.effect";
//ACTIONS
import { loginAsync } from "redux/auth/auth.actions";

const LoginPage = (props) => {
   const { loginAsync, isLoading } = props;

   const history = useHistory();
   const {
      inputState,
      handleInput,
      handleInvalidMessage,
      invalidMessages,
   } = useInput();

   const handleInputChange = (event) => {
      handleInput(event);
   };

   const login = (e) => {
      e.preventDefault();
      loginAsync(
         { email: inputState.email, password: inputState.password },
         history
      );
   };

   return (
      <section className="login-page">
         {/*<div className="login-page__logo-block">*/}
         {/*   <img src={logoLingvoinsta} alt="logo" />*/}
         {/*</div>*/}
         <div className="login-page__auth-block">
            <GridItem xs={12} sm={12} md={6} lg={6}>
               <div className="login-page__auth-block-card">
                  <GridItem
                     xs={12}
                     sm={12}
                     md={12}
                     lg={12}
                     className="fields__block">
                     <form onSubmit={login}>
                        <GridItem xs={12} sm={12} md={12} lg={12}>
                           <Input
                              name="email"
                              value={inputState.email}
                              error={invalidMessages}
                              onChange={handleInputChange}
                              onInvalid={handleInvalidMessage}
                              autoComplete="on"
                              label="E-mail"
                              type="text"
                              required
                           />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} lg={12}>
                           <Input
                              name="password"
                              value={inputState.password}
                              error={invalidMessages}
                              onChange={handleInputChange}
                              onInvalid={handleInvalidMessage}
                              label="Password"
                              type="password"
                              required
                           />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} lg={12}>
                           <Button isLoading={isLoading} type="submit">
                              Login
                           </Button>
                        </GridItem>
                     </form>
                  </GridItem>
               </div>
            </GridItem>
         </div>
      </section>
   );
};

const mapStateToProps = (state) => {
   const { auth } = state;

   return {
      isLoading: auth.isLoading,
   };
};

const mapDispatchToProps = (dispatch) => ({
   loginAsync: (email, password) => dispatch(loginAsync(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
