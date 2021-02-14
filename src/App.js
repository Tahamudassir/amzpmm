import React from "react";
import { Provider } from "react-redux";
import Routes from "./Routes";
import store from "./redux/store";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from "./configs/AppConfig";
import { IntlProvider } from "react-intl";
// import history from "./history";

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeSwitcherProvider
          themeMap={themes}
          defaultTheme={THEME_CONFIG.currentTheme}
          insertionPoint="styles-insertion-point"
        >
          <IntlProvider locale="en">
            <Routes />
          </IntlProvider>
        </ThemeSwitcherProvider>
      </Provider>
    </div>
  );
}

export default App;
