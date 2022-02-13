import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: '#FF5C8D',
    background: '#FDEFF4',
    card: '#524A4E',
    text: '#FF5C8D',
    border: '#FDEFF4',
    notification: '#524A4E',
  },
  dividerColor: '#524A4E)',
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  colors: {
    primary: '#FA58B6',
    background: '#1A1A40',
    card: '#7A0BC0',
    text: '#FA58B6',
    border: '#7A0BC0',
    notification: '#7A0BC0',
  },
  dividerColor: '#7A0BC0',
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {...lightTheme};

    case 'set_dark_theme':
      return {...darkTheme};

    default:
      return state;
  }
};
