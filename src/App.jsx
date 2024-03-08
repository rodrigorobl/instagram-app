import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { Header } from "./components/header";
import { NavBar } from "./components/navbar";
import { Stories } from "./components/stories";
import { Flex, Screen } from "./style";
import { darkTheme, lightTheme } from "./style/theme";
import { Publications } from "./components/publications";

function App() {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Screen>
        <NavBar themeToggler={themeToggler} theme={theme} />

        <Flex gap="2px">
          <Header />
          <Stories />
          <Publications />
        </Flex>
      </Screen>
    </ThemeProvider>
  );
}

export default App;
