import React from "react";
import { ThemeProvider } from 'styled-components';

const ThemeToggleContext = React.createContext({
  darkToggle: () => {},
  lightToggle: () => {}
});

export const useTheme = 
   () => React.useContext(ThemeToggleContext);


export const MyThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = React.useState({
    mode: 'dark'
  });

  // define toggle function
  const darkToggle = () => {
    const mode = (themeState.mode = 'dark');
    setThemeState({ mode: mode });
  };

  const lightToggle = () => {
    const mode = (themeState.mode = 'light');
    
   setThemeState({ mode: mode });
  };
  // render both contexts, then Wrapper, then children
  return (
     <ThemeToggleContext.Provider
       value={{ 
         darkToggle: darkToggle,
         lightToggle: lightToggle 
        }}
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