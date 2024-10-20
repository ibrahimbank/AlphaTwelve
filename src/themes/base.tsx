import type { Theme } from '@mui/material';
import { AlphaTwelveDarkTheme, type TAlphaTwelveDarkTheme } from '@/themes/alphatwelve/dark';
import { AlphaTwelve, type TAlphaTwelve } from '@/themes/alphatwelve/light';
export function themeCreator(theme: keyof typeof themeMap): Theme {
  return themeMap[theme];
}

export const themeMap = {
  AlphaTwelve,
  AlphaTwelveDarkTheme,
} as const;

export type PlatformTheme = Theme & TAlphaTwelve | TAlphaTwelveDarkTheme;
