// components
import LayoutRouter from "./Components/UIKit/Router/LayoutRouter";
import Loader from "./Components/UIKit/Loader/Loader";

// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@hybris-software/ui-kit";

// Data
// import { routeComponents } from "./Data/routes";

// Views
import NotFoundView from "./Views/Generic/NotFoundView";
import OurTeam from "./Views/Main/OurTeam/OurTeam.jsx";
import PressRelease from "./Views/Main/PressRelease/PressRelease.jsx";
//Style
import Theme from "./Assets/css/Theme.module.css";

function App() {
  return (
    <ThemeProvider
      theme={{
        row: {
          columnGap: {
            horizontal: {
              xs: 20,
              sm: 20,
              md: 20,
              lg: 20,
              xl: 20,
              xxl: 20,
            },
            vertical: {
              xs: 20,
              sm: 20,
              md: 20,
              lg: 20,
              xl: 20,
              xxl: 20,
            },
          },
        },

        container: {
          containerClassName: Theme.container,
        },
        button: {
          buttonClassName: Theme.buttonStyle,
          buttonSecondaryClassName: Theme.buttonSecondary,
        },
        inputField: {
          baseClassName: Theme.inputFieldStyle,
          errorClassName: Theme.inputFieldErrorStyle,
          successClassName: Theme.inputFieldSuccessStyle,
        },
        textField: {
          baseClassName: Theme.textFieldStyle,
        },
      }}
    >
      <BrowserRouter>
        <LayoutRouter
          loader={<Loader />}
          loadingTime={1000}
          clientTitle="Creed & Bear"
        >
          <Routes>
            <Route path="/" element={<NotFoundView />} />
            <Route path="our-team" element={<OurTeam />} />
            <Route path="press-release" element={<PressRelease />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </LayoutRouter>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
