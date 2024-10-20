import { type Theme, alpha, createTheme, darken, lighten } from '@mui/material';
// import '@mui/lab/themeAugmentation';
import localFont from 'next/font/local';

export const GeistSans = localFont({
  src: [
    {
      path: './fonts/Geist-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Geist-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Geist-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Geist-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Geist-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Geist-Black.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Geist-UltraBlack.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-geist-sans',
});

const themeColors = {
  primary: '#ADA9BB',
  accent: '#1E1E1E',
  bgColor: '#383544',
  paperColor: '#ADA9BB',
  secondary: '#8576FF',
  success: '#10B981',
  warning: '#e3ad23',
  error: '#F43F5E',
  info: '#484554',
  black: '#334155',
  white: '#ffffff',
  primaryAlt: '#484554',
  navBarColor: '#64748B',
};

export const AlphaTwelveDarkThemeColors = {
  gradients: {
    effect1: 'linear-gradient(128deg, #f23f3f 49.58%, #fb9b08)',
    blue1: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
    blue2: 'linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)',
    blue3: 'linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)',
    blue4: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
    blue5: 'linear-gradient(135deg, #97ABFF 10%, #123597 100%)',
    orange1: 'linear-gradient(135deg, #FCCF31 0%, #F55555 100%)',
    orange2: 'linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)',
    orange3: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
    purple1: 'linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)',
    purple3: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    pink1: 'linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)',
    pink2: 'linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)',
    green1: 'linear-gradient(135deg, #FFF720 0%, #3CD500 100%)',
    green2: 'linear-gradient(to bottom, #00b09b, #96c93d)',
    black1: 'linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)',
    black2: 'linear-gradient(60deg, #29323c 0%, #485563 100%)',
  },
  shadows: {
    success:
      '0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)',
    error:
      '0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)',
    info: '0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)',
    primary:
      '0px 1px 4px rgba(28, 52, 140, 0.25), 0px 3px 12px 2px rgba(28, 52, 140, 0.35)',
    warning:
      '0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)',
    card: 'none',
    // card: '0px 9px 16px rgba(159, 162, 191, .18), 0px 2px 2px rgba(159, 162, 191, 0.32)',
    cardSm: 'none',
    // cardSm:
    //   '0px 2px 3px rgba(159, 162, 191, .18), 0px 1px 1px rgba(159, 162, 191, 0.32)',
    cardLg: 'none',
    // cardLg:
    //   '0 5rem 14rem 0 rgb(255 255 255 / 30%), 0 0.8rem 2.3rem rgb(0 0 0 / 60%), 0 0.2rem 0.3rem rgb(0 0 0 / 45%)',
  },
  layout: {
    general: {
      bodyBg: themeColors.bgColor,
      paperColor: themeColors.paperColor,
    },
    sidebar: {
      background: themeColors.info,
      dividerBg: themeColors.black,
      textColor: lighten(themeColors.white, 0),
      activeTextColor: themeColors.black,
      menuItemBg: 'transparent',
      menuItemBgActive: themeColors.primary,
      menuItemColor: darken(themeColors.white, 0.2),
      menuItemColorActive: themeColors.white,
      menuItemIconColor: darken(themeColors.white, 0.2),
      menuItemIconColorActive: themeColors.white,
      menuItemHeadingColor: themeColors.accent,
      menuBorderRadius: '10px',
      boxShadow: 'none',
      width: '20vw',
      maxWidth: '350px',
      minWidth: '280px',
    },
  },
  alpha: {
    white: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white,
    },
    trueWhite: {
      5: alpha(themeColors.white, 0.02),
      10: alpha(themeColors.white, 0.1),
      30: alpha(themeColors.white, 0.3),
      50: alpha(themeColors.white, 0.5),
      70: alpha(themeColors.white, 0.7),
      100: themeColors.white,
    },
    black: {
      5: alpha(themeColors.black, 0.02),
      10: alpha(themeColors.black, 0.1),
      30: alpha(themeColors.black, 0.3),
      50: alpha(themeColors.black, 0.5),
      70: alpha(themeColors.black, 0.7),
      100: themeColors.black,
    },
    bgColor: {
      5: alpha(themeColors.bgColor, 0.02),
      10: alpha(themeColors.bgColor, 0.1),
      30: alpha(themeColors.bgColor, 0.3),
      50: alpha(themeColors.bgColor, 0.5),
      70: alpha(themeColors.bgColor, 0.7),
      100: themeColors.bgColor,
    },
  },
  secondary: {
    lighter: lighten(themeColors.secondary, 0.85),
    light: lighten(themeColors.secondary, 0.25),
    main: themeColors.secondary,
    dark: darken(themeColors.secondary, 0.2),
  },
  primary: {
    lighter: lighten(themeColors.primary, 0.85),
    light: lighten(themeColors.primary, 0.3),
    main: themeColors.primary,
    dark: darken(themeColors.primary, 0.2),
  },
  accent: {
    lighter: lighten(themeColors.accent, 0.85),
    light: lighten(themeColors.accent, 0.3),
    main: themeColors.accent,
    dark: darken(themeColors.accent, 0.2),
  },
  success: {
    lighter: lighten(themeColors.success, 0.85),
    light: lighten(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2),
  },
  warning: {
    lighter: lighten(themeColors.warning, 0.85),
    light: lighten(themeColors.warning, 0.3),
    main: themeColors.warning,
    dark: darken(themeColors.warning, 0.2),
  },
  error: {
    lighter: lighten(themeColors.error, 0.85),
    light: lighten(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2),
  },
  info: {
    lighter: lighten(themeColors.info, 0.85),
    light: lighten(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2),
  },
} as const;

const theme = {
  colors: AlphaTwelveDarkThemeColors,
  general: {
    reactFrameworkColor: '#00D8FF',
    paperColor: themeColors.paperColor,
    borderRadiusSm: '6px',
    borderRadius: '10px',
    borderRadiusLg: '12px',
    borderRadiusXl: '16px',
  },
  sidebar: {
    background: AlphaTwelveDarkThemeColors.layout.sidebar.background,
    textColor: AlphaTwelveDarkThemeColors.layout.sidebar.textColor,
    dividerBg: AlphaTwelveDarkThemeColors.layout.sidebar.dividerBg,
    menuItemColor: AlphaTwelveDarkThemeColors.layout.sidebar.menuItemColor,
    menuItemColorActive: AlphaTwelveDarkThemeColors.layout.sidebar.menuItemColorActive,
    menuItemBg: AlphaTwelveDarkThemeColors.layout.sidebar.menuItemBg,
    menuItemBgActive: AlphaTwelveDarkThemeColors.layout.sidebar.menuItemBgActive,
    menuItemIconColor: AlphaTwelveDarkThemeColors.layout.sidebar.menuItemIconColor,
    menuItemIconColorActive:
      AlphaTwelveDarkThemeColors.layout.sidebar.menuItemIconColorActive,
    menuItemHeadingColor:
      AlphaTwelveDarkThemeColors.layout.sidebar.menuItemHeadingColor,
    boxShadow: 'none',
    width: AlphaTwelveDarkThemeColors.layout.sidebar.width,
    maxWidth: AlphaTwelveDarkThemeColors.layout.sidebar.maxWidth,
    minWidth: AlphaTwelveDarkThemeColors.layout.sidebar.minWidth,
  },
  header: {
    height: '80px',
    background: AlphaTwelveDarkThemeColors.layout.sidebar.background,
    boxShadow: AlphaTwelveDarkThemeColors.shadows.cardSm,
    textColor: AlphaTwelveDarkThemeColors.alpha.white[100],
  },
  spacing: 9,
  palette: {
    common: {
      black: AlphaTwelveDarkThemeColors.alpha.black[100],
      white: AlphaTwelveDarkThemeColors.alpha.white[100],
    },
    mode: 'dark',
    primary: {
      light: AlphaTwelveDarkThemeColors.primary.light,
      main: AlphaTwelveDarkThemeColors.primary.main,
      dark: AlphaTwelveDarkThemeColors.primary.dark,
    },
    accent: {
      light: AlphaTwelveDarkThemeColors.accent.light,
      main: AlphaTwelveDarkThemeColors.accent.main,
      dark: AlphaTwelveDarkThemeColors.accent.dark,
      contrastText: AlphaTwelveDarkThemeColors.alpha.black[100],
    },
    secondary: {
      light: AlphaTwelveDarkThemeColors.secondary.light,
      main: AlphaTwelveDarkThemeColors.secondary.main,
      dark: AlphaTwelveDarkThemeColors.secondary.dark,
      contrastText: AlphaTwelveDarkThemeColors.alpha.black[100],
    },
    error: {
      light: AlphaTwelveDarkThemeColors.error.light,
      main: AlphaTwelveDarkThemeColors.error.main,
      dark: AlphaTwelveDarkThemeColors.error.dark,
      contrastText: AlphaTwelveDarkThemeColors.alpha.white[100],
    },
    success: {
      light: AlphaTwelveDarkThemeColors.success.light,
      main: AlphaTwelveDarkThemeColors.success.main,
      dark: AlphaTwelveDarkThemeColors.success.dark,
      contrastText: AlphaTwelveDarkThemeColors.alpha.white[100],
    },
    info: {
      light: AlphaTwelveDarkThemeColors.info.light,
      main: AlphaTwelveDarkThemeColors.info.main,
      dark: AlphaTwelveDarkThemeColors.info.dark,
      contrastText: AlphaTwelveDarkThemeColors.alpha.white[100],
    },
    warning: {
      light: AlphaTwelveDarkThemeColors.warning.light,
      main: AlphaTwelveDarkThemeColors.warning.main,
      dark: AlphaTwelveDarkThemeColors.warning.dark,
      contrastText: AlphaTwelveDarkThemeColors.alpha.black['70'],
    },
    text: {
      primary: AlphaTwelveDarkThemeColors.alpha.white[100],
      secondary: AlphaTwelveDarkThemeColors.alpha.black[100],
      disabled: AlphaTwelveDarkThemeColors.alpha.black[50],
    },
    bgColor: {
      primary: AlphaTwelveDarkThemeColors.alpha.bgColor[100],
      secondary: AlphaTwelveDarkThemeColors.alpha.bgColor[100],
      disabled: AlphaTwelveDarkThemeColors.alpha.bgColor[50],
    },
    background: {
      paper: AlphaTwelveDarkThemeColors.layout.general.paperColor,
      default: AlphaTwelveDarkThemeColors.layout.general.bodyBg,
    },
    action: {
      active: AlphaTwelveDarkThemeColors.alpha.white[100],
      hover: AlphaTwelveDarkThemeColors.primary.lighter,
      hoverOpacity: 0.1,
      selected: AlphaTwelveDarkThemeColors.alpha.white[30],
      selectedOpacity: 0.1,
      disabled: AlphaTwelveDarkThemeColors.alpha.white[50],
      disabledBackground: AlphaTwelveDarkThemeColors.alpha.white[30],
      disabledOpacity: 0.38,
      focus: AlphaTwelveDarkThemeColors.alpha.white[30],
      focusOpacity: 0.05,
      activatedOpacity: 0.12,
    },
    tonalOffset: 0.5,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840,
    },
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(darken(themeColors.primaryAlt, 0.4), 0.2),
          backdropFilter: 'blur(2px)',

          '&.MuiBackdrop-invisible': {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(2px)',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          marginLeft: 8,
          marginRight: 8,
          fontWeight: 'bold',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          width: '100%',
          height: '100%',
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          flex: 1,
        },
        '#__next': {
          width: '100%',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
        },
        html: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
        },
        '.child-popover .MuiPaper-root .MuiList-root': {
          flexDirection: 'column',
        },
        '#nprogress': {
          pointerEvents: 'none',
        },
        '#nprogress .bar': {
          background: AlphaTwelveDarkThemeColors.primary.main,
          borderColor: AlphaTwelveDarkThemeColors.primary.main,
          height: '6px',
          borderRadius: '50px',
        },
        '#nprogress .spinner-icon': {
          borderTopColor: AlphaTwelveDarkThemeColors.primary.lighter,
          borderLeftColor: AlphaTwelveDarkThemeColors.primary.lighter,
        },
        '#nprogress .peg': {
          boxShadow: `0 0 15px ${AlphaTwelveDarkThemeColors.primary.lighter}, 0 0 8px${AlphaTwelveDarkThemeColors.primary.light}`,
        },
        ':root': {
          '--swiper-theme-color': AlphaTwelveDarkThemeColors.primary.main,
        },
        code: {
          background: AlphaTwelveDarkThemeColors.info.lighter,
          color: AlphaTwelveDarkThemeColors.info.dark,
          borderRadius: 4,
          padding: 4,
        },
        '@keyframes pulse': {
          '0%': {
            transform: 'scale(.75)',
          },
          '20%': {
            transform: 'scale(1.1)',
          },
          '40%': {
            transform: 'scale(.75)',
          },
          '60%': {
            transform: 'scale(1.05)',
          },
          '80%': {
            transform: 'scale(.75)',
          },
          '100%': {
            transform: 'scale(.75)',
          },
        },
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(.8)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2.8)',
            opacity: 0,
          },
        },
        '@keyframes float': {
          '0%': {
            transform: 'translate(0%, 0%)',
          },
          '100%': {
            transform: 'translate(3%, 3%)',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        iconOutlined: {
          color: AlphaTwelveDarkThemeColors.alpha.white[50],
        },
        icon: {
          top: 'calc(50% - 14px)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiInputAdornment-positionEnd.MuiInputAdornment-outlined': {
            paddingRight: 6,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: AlphaTwelveDarkThemeColors.alpha.white[50],
          },
          '&.Mui-focused:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: AlphaTwelveDarkThemeColors.primary.main,
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        colorPrimary: {
          fontWeight: 'bold',
          lineHeight: '40px',
          fontSize: 13,
          background: AlphaTwelveDarkThemeColors.alpha.black[5],
          color: AlphaTwelveDarkThemeColors.alpha.black[70],
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        action: {
          marginTop: -5,
          marginBottom: -5,
        },
        title: {
          fontSize: 15,
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorSecondary: {
          background: AlphaTwelveDarkThemeColors.alpha.black[5],
          color: AlphaTwelveDarkThemeColors.alpha.white[100],

          '&:hover': {
            background: AlphaTwelveDarkThemeColors.alpha.black[10],
          },
        },
        deleteIcon: {
          color: AlphaTwelveDarkThemeColors.error.light,

          '&:hover': {
            color: AlphaTwelveDarkThemeColors.error.main,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',

          '&.Mui-expanded': {
            margin: 0,
          },
          '&::before': {
            display: 'none',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        colorDefault: {
          background: AlphaTwelveDarkThemeColors.alpha.black[30],
          color: AlphaTwelveDarkThemeColors.alpha.white[100],
        },
      },
    },
    MuiAvatarGroup: {
      styleOverrides: {
        root: {
          alignItems: 'center',
        },
        avatar: {
          background: AlphaTwelveDarkThemeColors.alpha.black[10],
          fontSize: 13,
          color: AlphaTwelveDarkThemeColors.alpha.black[70],
          fontWeight: 'bold',

          '&:first-of-type': {
            border: 0,
            background: 'transparent',
          },
        },
      },
    },
    MuiListItemAvatar: {
      styleOverrides: {
        alignItemsFlexStart: {
          marginTop: 0,
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        page: {
          fontSize: 13,
          fontWeight: 'bold',
          transition: 'all .2s',
        },
        textPrimary: {
          '&.Mui-selected': {
            boxShadow: AlphaTwelveDarkThemeColors.shadows.primary,
          },
          '&.MuiButtonBase-root:hover': {
            background: AlphaTwelveDarkThemeColors.alpha.white[5],
          },
          '&.Mui-selected.MuiButtonBase-root:hover': {
            background: AlphaTwelveDarkThemeColors.primary.main,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textTransform: 'none',
          paddingLeft: 16,
          paddingRight: 16,
          borderRadius: 10,

          '.MuiSvgIcon-root': {
            transition: 'all .2s',
          },
        },
        endIcon: {
          marginRight: -8,
        },
        containedSecondary: {
          backgroundColor: AlphaTwelveDarkThemeColors.secondary.main,
          color: AlphaTwelveDarkThemeColors.alpha.black[100],
          border: `2px solid ${AlphaTwelveDarkThemeColors.alpha.black[30]}`,
        },
        outlinedSecondary: {
          backgroundColor: AlphaTwelveDarkThemeColors.alpha.white[100],

          '&:hover, &.MuiSelected': {
            backgroundColor: AlphaTwelveDarkThemeColors.alpha.white[5],
            color: AlphaTwelveDarkThemeColors.alpha.white[100],
          },
        },
        sizeSmall: {
          padding: '6px 16px',
          lineHeight: 1.5,
        },
        sizeMedium: {
          padding: '8px 20px',
        },
        sizeLarge: {
          padding: '11px 24px',
        },
        textSizeSmall: {
          padding: '7px 12px',
        },
        textSizeMedium: {
          padding: '9px 16px',
        },
        textSizeLarge: {
          padding: '12px 16px',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          borderRadius: 50,
        },
      },
    },
    MuiToggleButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: AlphaTwelveDarkThemeColors.primary.main,
          background: AlphaTwelveDarkThemeColors.alpha.white[100],
          transition: 'all .2s',

          '&:hover, &.Mui-selected, &.Mui-selected:hover': {
            color: AlphaTwelveDarkThemeColors.alpha.white[100],
            background: AlphaTwelveDarkThemeColors.primary.main,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 8,

          '& .MuiTouchRipple-root': {
            borderRadius: 8,
          },
        },
        sizeSmall: {
          padding: 4,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-root': {
            opacity: 0.3,
          },
          '&:hover': {
            backgroundColor: AlphaTwelveDarkThemeColors.primary.light,
            color: AlphaTwelveDarkThemeColors.alpha.black[100],
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background: AlphaTwelveDarkThemeColors.alpha.white[10],
          border: 0,
          height: 1,
        },
        vertical: {
          height: 'auto',
          width: 1,

          '&.MuiDivider-flexItem.MuiDivider-fullWidth': {
            height: 'auto',
          },
          '&.MuiDivider-absolute.MuiDivider-fullWidth': {
            height: '100%',
          },
        },
        withChildren: {
          '&:before, &:after': {
            border: 0,
          },
        },
        wrapper: {
          background: AlphaTwelveDarkThemeColors.layout.general.bodyBg,
          fontWeight: 'bold',
          height: 24,
          lineHeight: '24px',
          transform: 'translateY(-70%)',
          color: 'inherit',
          textTransform: 'uppercase',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        elevation0: {
          boxShadow: 'none',
        },
        elevation: {
          boxShadow: AlphaTwelveDarkThemeColors.shadows.card,
        },
        elevation2: {
          boxShadow: AlphaTwelveDarkThemeColors.shadows.cardSm,
        },
        elevation24: {
          boxShadow: AlphaTwelveDarkThemeColors.shadows.cardLg,
        },
        outlined: {
          boxShadow: AlphaTwelveDarkThemeColors.shadows.card,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          height: 6,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel': {
            transform: 'none',
          },
          '& .MuiSlider-valueLabel': {
            borderRadius: 6,
            background: AlphaTwelveDarkThemeColors.alpha.black[100],
            color: AlphaTwelveDarkThemeColors.alpha.white[100],
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,

          '& .MuiListItem-button': {
            transition: 'all .2s',

            '& > .MuiSvgIcon-root': {
              minWidth: 34,
            },

            '& .MuiTouchRipple-root': {
              opacity: 0.2,
            },
          },
          '& .MuiListItem-root.MuiButtonBase-root.Mui-selected': {
            backgroundColor: alpha(AlphaTwelveDarkThemeColors.primary.lighter, 0.4),
            color: '#101010',
          },
          '& .MuiMenuItem-root.MuiButtonBase-root:active': {
            backgroundColor: alpha(AlphaTwelveDarkThemeColors.primary.lighter, 0.4),
            color: '#101010',
          },
          '& .MuiMenuItem-root.MuiButtonBase-root .MuiTouchRipple-root': {
            opacity: 0.2,
          },
        },
        padding: {
          padding: '12px',

          '& .MuiListItem-button': {
            borderRadius: 6,
            margin: '1px 0',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          height: 38,
          minHeight: 38,
          overflow: 'visible',
        },
        indicator: {
          height: 38,
          minHeight: 38,
          borderRadius: 6,
          border: `1px solid ${AlphaTwelveDarkThemeColors.primary.dark}`,
          boxShadow: `0px 2px 10px ${AlphaTwelveDarkThemeColors.primary.light}`,
        },
        scrollableX: {
          overflow: 'visible !important',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 0,
          height: 38,
          minHeight: 38,
          borderRadius: 6,
          transition: 'color .2s',
          textTransform: 'capitalize',

          '&.MuiButtonBase-root': {
            minWidth: 'auto',
            paddingLeft: 20,
            paddingRight: 20,
            marginRight: 4,
          },
          '&.Mui-selected, &.Mui-selected:hover': {
            color: AlphaTwelveDarkThemeColors.alpha.black[100],
            zIndex: 5,
          },
          '&:hover': {
            color: AlphaTwelveDarkThemeColors.alpha.black[100],
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          padding: 12,
        },
        list: {
          padding: 12,

          '& .MuiMenuItem-root.MuiButtonBase-root': {
            fontSize: 14,
            marginTop: 1,
            marginBottom: 1,
            transition: 'all .2s',
            color: AlphaTwelveDarkThemeColors.alpha.black[100],

            '& .MuiTouchRipple-root': {
              opacity: 0.2,
            },

            '&:hover, &:active, &.active, &.Mui-selected': {
              color: AlphaTwelveDarkThemeColors.alpha.black[100],
              fontWeight: '700',
              background: alpha(AlphaTwelveDarkThemeColors.primary.main, 0.4),
            },
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          background: 'transparent',
          transition: 'all .2s',

          '&:hover, &:active, &.active, &.Mui-selected': {
            color: AlphaTwelveDarkThemeColors.alpha.black[100],
            background: alpha(AlphaTwelveDarkThemeColors.primary.lighter, 0.4),
          },
          '&.Mui-selected:hover': {
            background: alpha(AlphaTwelveDarkThemeColors.primary.lighter, 0.4),
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.MuiButtonBase-root': {
            color: AlphaTwelveDarkThemeColors.secondary.main,

            '&:hover, &:active, &.active, &.Mui-selected': {
              color: AlphaTwelveDarkThemeColors.alpha.black[100],
              background: lighten(AlphaTwelveDarkThemeColors.primary.lighter, 0.6),
            },
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        tag: {
          margin: 1,
        },
        root: {
          '.MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment':
            {
              right: 14,
            },
        },
        clearIndicator: {
          background: AlphaTwelveDarkThemeColors.error.lighter,
          color: AlphaTwelveDarkThemeColors.error.main,
          marginRight: 8,

          '&:hover': {
            background: AlphaTwelveDarkThemeColors.error.lighter,
            color: AlphaTwelveDarkThemeColors.error.dark,
          },
        },
        popupIndicator: {
          color: AlphaTwelveDarkThemeColors.alpha.white[50],

          '&:hover': {
            background: AlphaTwelveDarkThemeColors.primary.lighter,
            color: AlphaTwelveDarkThemeColors.primary.main,
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          '& .MuiIconButton-root': {
            padding: 8,
          },
        },
        select: {
          zIndex: 1000,
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MUIDataTableJumpToPage: {
      styleOverrides: {
        select: {
          zIndex: 10,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '0 !important',
          padding: '0 !important',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        head: {
          background: AlphaTwelveDarkThemeColors.alpha.black[5],
        },
        root: {
          transition: 'background-color .2s',

          '&.MuiTableRow-hover:hover': {
            backgroundColor: AlphaTwelveDarkThemeColors.alpha.black[5],
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: AlphaTwelveDarkThemeColors.alpha.black[10],
          fontSize: 14,
        },
        head: {
          textTransform: 'uppercase',
          fontSize: 13,
          fontWeight: 'bold',
          color: AlphaTwelveDarkThemeColors.alpha.black[70],
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        message: {
          lineHeight: 1.5,
          fontSize: 14,
        },
        standardInfo: {
          color: AlphaTwelveDarkThemeColors.info.main,
        },
        action: {
          color: AlphaTwelveDarkThemeColors.alpha.black[70],
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          margin: 0,
          zIndex: 5,
          position: 'absolute',
          top: '50%',
          marginTop: -6,
          left: -6,
        },
        outlined: {
          backgroundColor: AlphaTwelveDarkThemeColors.alpha.white[100],
          boxShadow: `0 0 0 6px ${AlphaTwelveDarkThemeColors.alpha.white[100]}`,
        },
        outlinedPrimary: {
          backgroundColor: AlphaTwelveDarkThemeColors.alpha.white[100],
          boxShadow: `0 0 0 6px ${AlphaTwelveDarkThemeColors.alpha.white[100]}`,
        },
      },
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          position: 'absolute',
          height: '100%',
          top: 0,
          borderRadius: 50,
          backgroundColor: AlphaTwelveDarkThemeColors.alpha.black[10],
        },
      },
    },
    MuiTimelineItem: {
      styleOverrides: {
        root: {
          minHeight: 0,
          padding: '8px 0',

          '&:before': {
            display: 'none',
          },
        },
        missingOppositeContent: {
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: alpha(AlphaTwelveDarkThemeColors.alpha.black['100'], 0.95),
          padding: '8px 16px',
          fontSize: 13,
        },
        arrow: {
          color: alpha(AlphaTwelveDarkThemeColors.alpha.black['100'], 0.95),
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          height: 33,
          overflow: 'visible',

          '& .MuiButtonBase-root': {
            position: 'absolute',
            padding: 6,
            transition:
              'left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          },
          '& .MuiIconButton-root': {
            borderRadius: 100,
          },
          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
            opacity: 0.3,
          },
        },
        thumb: {
          border: `1px solid ${AlphaTwelveDarkThemeColors.alpha.black[30]}`,
          boxShadow: `0px 9px 14px ${AlphaTwelveDarkThemeColors.alpha.black[10]}, 0px 2px 2px ${AlphaTwelveDarkThemeColors.alpha.black[10]}`,
        },
        track: {
          backgroundColor: AlphaTwelveDarkThemeColors.alpha.black[5],
          border: `1px solid ${AlphaTwelveDarkThemeColors.alpha.black[10]}`,
          boxShadow: `inset 0px 1px 1px ${AlphaTwelveDarkThemeColors.alpha.black[10]}`,
          opacity: 1,
        },
        colorPrimary: {
          '& .MuiSwitch-thumb': {
            backgroundColor: AlphaTwelveDarkThemeColors.alpha.white[100],
          },

          '&.Mui-checked .MuiSwitch-thumb': {
            backgroundColor: AlphaTwelveDarkThemeColors.primary.main,
          },
        },
      },
    },
    MuiStepper: {
      styleOverrides: {
        root: {
          paddingTop: 20,
          paddingBottom: 20,
          background: AlphaTwelveDarkThemeColors.alpha.black[5],
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.MuiStepIcon-completed': {
            color: AlphaTwelveDarkThemeColors.success.main,
          },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'div',
          h4: 'div',
          h5: 'div',
          h6: 'div',
          subtitle1: 'div',
          subtitle2: 'div',
          body1: 'div',
          body2: 'div',
        },
      },
      styleOverrides: {
        gutterBottom: {
          marginBottom: 4,
          color: AlphaTwelveDarkThemeColors.alpha.white[100],
        },
        paragraph: {
          fontSize: 17,
          lineHeight: 1.7,
        },
      },
    },

    MUIDataTable: {
      styleOverrides: {
        root: {
          p: 2,
        },
      },
    },
    MUIDataTableToolbar: {
      styleOverrides: {
        root: {
          padding: '1rem !important',
          borderRadius: '10px 10px 0 0 !important',
        },
        titleText: {
          fontWeight: '600',
          fontFamily: GeistSans.style.fontFamily,
        },
        icon: {
          backgroundColor: `${AlphaTwelveDarkThemeColors.layout.general.bodyBg} !important`,
          margin: '0 .2rem !important',
          fontFamily: GeistSans.style.fontFamily,
          '&:hover': {
            backgroundColor: `${darken(
              AlphaTwelveDarkThemeColors.layout.general.bodyBg,
              0.2
            )} !important`,
          },
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          color: AlphaTwelveDarkThemeColors.secondary.dark,
          fontWeight: '600',
          borderBottom: `1px solid ${AlphaTwelveDarkThemeColors.primary.main}`,
          fontFamily: GeistSans.style.fontFamily,
        },
        fixedHeader: {
          background: AlphaTwelveDarkThemeColors.layout.general.paperColor,
          padding: '1rem 2rem',
          fontFamily: GeistSans.style.fontFamily,

          '*': {
            fontFamily: GeistSans.style.fontFamily,
            fontSize: '.85rem !important',
            workBreak: 'keep-all',
            whiteSpace: 'nowrap',
            fontWeight: '800 !important',
            textTransform: 'uppercase !important',
          },
        },
        data: {
          fontSize: '11px',
          fontWeight: '600',
          lineHeight: '18px',
          workBreak: 'keep-all',
          whiteSpace: 'nowrap',
        },
      },
    },
    MUIDataTableBodyCell: {
      styleOverrides: {
        stackedCommon: {
          color: AlphaTwelveDarkThemeColors.alpha.black[70],
          fontWeight: '500',
          wordSpace: 'keep-all',
          whiteSpace: 'nowrap',
        },
      },
    },
    MuiDataTableFooter: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
        },
      },
    },
    CircularProgressbar: {
      styleOverrides: {
        root: {
          '&-text': {
            fill: `${AlphaTwelveDarkThemeColors.alpha.white[100]} !important`,
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    fontFamily: GeistSans.style.fontFamily,
    h1: {
      fontWeight: 700,
      fontSize: 35,
    },
    h2: {
      fontWeight: 700,
      fontSize: 30,
    },
    h3: {
      fontWeight: 700,
      fontSize: 25,
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 700,
      fontSize: 20,
    },
    h5: {
      fontWeight: 700,
      fontSize: 16,
    },
    h6: {
      fontSize: 14,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: 14,
      textTransform: 'uppercase',
      color: AlphaTwelveDarkThemeColors.alpha.white[50],
    },
    subtitle1: {
      fontSize: 17,
      color: AlphaTwelveDarkThemeColors.alpha.white[70],
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 15,
      color: AlphaTwelveDarkThemeColors.alpha.white[70],
    },
    overline: {
      fontSize: 14,
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
} as const;
export const AlphaTwelveDarkTheme = createTheme(theme as unknown as Theme);
export type TAlphaTwelveDarkTheme = typeof theme;
