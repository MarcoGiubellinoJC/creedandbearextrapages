import React from "react";

// Assets
import Logo from "../../../../Assets/logos/blackLogosvg.svg";
//Styles
import Style from "./LoaderDefaultImage.module.css";

const LoaderDefaultImage = () => {
  return (
    <div className={Style.loaderContainer}>
      <div className={Style.logoImage}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={Style.animatedBar}></div>
    </div>
  );
};

export default LoaderDefaultImage;
