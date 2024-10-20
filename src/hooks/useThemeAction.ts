import { useContext } from 'react';
import {ThemeContext, ThemeContextValue} from "@/themes";

export const useThemeAction: () => ThemeContextValue = () =>
  useContext(ThemeContext);
