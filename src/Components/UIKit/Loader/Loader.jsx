import React from "react";

//Components
import LoaderDefaultImage from "./LoaderDefaultImage/LoaderDefaultImage";

// Utils
import classNames from "../../../Utils/classNames";

// Styles
import Style from "./Loader.module.css";

const Loader = ({
  className,
  classNameImageContainer,
  customLoader,
  style,
  children,
  loading = true,
}) => {
  return (
    <div style={style} className={classNames(Style.loader, className)}>
      <div
        className={classNames(
          Style.defaultLoaderImage,
          classNameImageContainer
        )}
      >
        {loading ? (
          !customLoader ? (
            <LoaderDefaultImage />
          ) : (
            customLoader
          )
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Loader;
