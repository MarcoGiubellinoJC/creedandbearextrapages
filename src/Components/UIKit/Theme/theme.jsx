import Style from "./Theme.module.css";

const theme = {
  container: {
    containerClassName: Style.containerClass,
  },
  row: {
    columnGap: {
      horizontal: {
        xs: 50,
        sm: 50,
        md: 50,
        lg: 50,
        xl: 50,
        xxl: 50,
      },
      vertical: {
        xs: 100,
        sm: 100,
        md: 100,
        lg: 100,
        xl: 100,
        xxl: 100,
      },
    },
  },
  button: {
    buttonClassName: Style.buttonClass,
    buttonDisabledClassName: Style.buttonDisabledClass,
    loader: <div className={Style.buttonLoader}></div>,
  },
  inputField: Style.inputFieldClass,
};

export default theme;
