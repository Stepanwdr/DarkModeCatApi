import React, {useEffect, useState} from 'react';
import useAction from "./hooks/useAction";
import {ThemeProvider} from "styled-components";

import {GlobalStyle} from "./styles/globalStyles";
import Helmet from "helmet";
import {darkTheme, lightTheme} from "./styles/theme";
import Layout from "./components/Layout/Layout";
import Routers from "./Routes";
export const ThemeContext=React.createContext(null);
const App = () => {
    const [theme,setTheme]=useState("light")
    const {fetchCatsCategories}=useAction()
    const themeStyle=theme==="light" ? lightTheme:darkTheme;
    useEffect(()=>{
        fetchCatsCategories()
    },[])
    return (
      < ThemeContext.Provider value={{setTheme,theme}}>
        <ThemeProvider theme={themeStyle}>
          <GlobalStyle/>
          <Helmet>
              <title>
                  Cat App
                </title>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
                            rel="stylesheet"/>
          </Helmet>
            <>
            <Layout>
                <Routers/>
            </Layout>
            </>
        </ThemeProvider>
      </ThemeContext.Provider>
    );
};

export default App;