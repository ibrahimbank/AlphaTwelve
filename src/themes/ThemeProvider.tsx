import {
  createContext,
  type FC,
  type PropsWithChildren,
  useEffect,
  useReducer,
} from 'react';
import { ThemeProvider } from '@mui/material';
import { themeCreator, type themeMap } from './base';
import { StylesProvider } from '@mui/styles';

interface AuthState {
  theme: keyof typeof themeMap;
}

const initialAuthState: AuthState = {
  theme: 'AlphaTwelve',
};

export interface ThemeContextValue extends AuthState {
  method: 'THEME';
  setTheme: (_theme: keyof typeof themeMap) => void;
}

type ThemeAction = {
  type: 'SET_THEME';
  payload: {
    theme: keyof typeof themeMap;
  };
};

const handlers: Record<
  string,
  (state: AuthState, action: ThemeAction) => AuthState
> = {
  SET_THEME: (state: AuthState, action: ThemeAction): AuthState => {
    state.theme = action.payload.theme;
    return { ...state };
  },
};

const reducer = (state: AuthState, action: ThemeAction) => {
  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: 'AlphaTwelve',
  method: 'THEME',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setTheme: (_theme: keyof typeof themeMap) => {
    //
  },
} as const);

export const ThemeProviderWrapper: FC<
  PropsWithChildren & {
    theme: keyof typeof themeMap;
    isDefault?: boolean;
  }
> = (props) => {
  if (!props.theme) {
    throw new Error('Theme is required');
  }

  const [state, dispatch] = useReducer(reducer, {
    ...initialAuthState,
    theme: props.theme,
  });

  useEffect(() => {
    if (props.isDefault) {
      setTheme(props.theme);
    } else {
      const curThemeName = (window.localStorage.getItem('appTheme') ??
        props.theme) as keyof typeof themeMap;
      setTheme(curThemeName);
    }
  }, [props.isDefault, props.theme]);

  const setTheme = (theme: keyof typeof themeMap): void => {
    localStorage.setItem('appTheme', theme);
    dispatch({ type: 'SET_THEME', payload: { theme } });
  };

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider
        value={{
          ...state,
          method: 'THEME',
          setTheme,
        }}
      >
        <ThemeProvider theme={themeCreator(state.theme)}>
          {props.children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};
