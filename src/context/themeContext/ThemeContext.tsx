import React, {createContext, useEffect, useReducer} from 'react';
import {Appearance, AppState, useColorScheme} from 'react-native';
import {darkTheme, lightTheme, themeReducer, ThemeState} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setLightTheme: () => void;
  setDarkTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  // For Ios:
  // const colorScheme = useColorScheme();

  // useEffect(() => {
  //   if (colorScheme === 'dark') {
  //     setDarkTheme();
  //   } else {
  //     setLightTheme();
  //   }
  // }, [colorScheme]);

  useEffect(() => {
    AppState.addEventListener('change', status => {
      // console.log(status);
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);

  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'light' ? lightTheme : darkTheme,
  );
  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('setDarkTheme');
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('setLightTheme');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
