import React from "react";
import styled, { ThemeProvider } from 'styled-components';

const ThemeToggleContext = React.createContext({
  toggle: () => {}
});

export const useTheme = 
   () => React.useContext(ThemeToggleContext);


export const MyThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = React.useState({
    mode: 'dark'
  });

  // define toggle function
  const toggle = () => {
    const mode = (themeState.mode === 'light' 
                   ? `dark` 
                   : `light`);
    
   setThemeState({ mode: mode });
  };
  // render both contexts, then Wrapper, then children
  return (
     <ThemeToggleContext.Provider
       value={{ toggle: toggle }}
     >
       <ThemeProvider
         theme={{
           mode: themeState.mode
         }}
       >
         {children}
       </ThemeProvider>
     </ThemeToggleContext.Provider>
  );
 }

 export default ThemeProvider;