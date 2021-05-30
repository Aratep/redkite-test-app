import React from "react";
import classNames from "classnames";

// MATERIAL UI COMPONENTS
import { Button } from "@material-ui/core";

const CustomButton = (props) => {
   const {
      children,
      className,
      isLoading,
      disabled,
      src,
      color = "primary",
      variant = "contained",
      ...otherProps
   } = props;

   const btn_styles = classNames({
      "li-button": true,
      "li-button__disabled": disabled,
      [className]: className,
   });

   return (
      <Button
         className={btn_styles}
         color={color}
         variant={variant}
         {...otherProps}
         disabled={disabled || isLoading}>
         {src && <img src={src} alt="icon" />}
         <span>{children}</span>
         {/*{isLoading && (*/}
         {/*   <div className="spinner">*/}
         {/*      <Spinner animation="grow" variant="light" />*/}
         {/*   </div>*/}
         {/*)}*/}
      </Button>
   );
};

export default CustomButton;
