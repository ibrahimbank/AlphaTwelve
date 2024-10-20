
import Switch, {SwitchProps} from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import {themeMap} from "@/themes";
import {useThemeAction} from "@/hooks/useThemeAction";

const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.secondary.main,
                opacity: 1,
                border: 0,
                ...theme.applyStyles('dark', {
                    backgroundColor: theme.palette.secondary.main,
                }),
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: theme.palette.secondary.main,
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color: theme.palette.grey[100],
            ...theme.applyStyles('dark', {
                color: '#fff',
            }),
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.7,
            ...theme.applyStyles('dark', {
                opacity: 0.3,
            }),
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,

    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: '#fff',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
        ...theme.applyStyles('dark', {
            backgroundColor: '#39393D',
        }),
    },
}));


function HeaderTheme() {
    const themes: [keyof typeof themeMap, keyof typeof themeMap] = [
        'AlphaTwelve',
        'AlphaTwelveDarkTheme',
    ];
    const { setTheme, theme } = useThemeAction();
    return (
        <IOSSwitch
            className={'theme_switcher'}
            checked={theme === 'AlphaTwelveDarkTheme'}
            onChange={() => {
                setTheme(theme === 'AlphaTwelve' ? themes[1] : themes[0]);
            }}
        />
    );
}

export default HeaderTheme;
