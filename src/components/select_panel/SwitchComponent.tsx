import React, { FC } from 'react';
import { createMuiTheme, Theme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { SwitchComponentPropsI } from '../../interfaces/navBarInterface';

const CustomSwitch = withStyles((theme: Theme) => ({
    switchBase: {
        color: theme.palette.primary.main,
        '&$checked': {
            color: theme.palette.primary.main,
            opacity: 1,
        },
        '&$checked + $track': {
            backgroundColor: 'rgba(255,255,255, 0)',
            opacity: 0.7,
            border: `1px solid ${theme.palette.primary.main}`,
        },
        '& + $track': {
            backgroundColor: 'rgba(255,255,255, 0)',
            opacity: 0.7,
            border: `1px solid ${theme.palette.primary.main}`,
        },
    },
    checked: {},
    track: {},
}))(Switch);

const SwitchComponent: FC<SwitchComponentPropsI> = ({
    switchValue,
    handleSwitchChange,
    themeMode,
}: SwitchComponentPropsI) => {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: themeMode.actionColor,
            },
            secondary: {
                main: themeMode.backgroundColor,
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CustomSwitch checked={switchValue} onChange={handleSwitchChange} />
        </ThemeProvider>
    );
};

export default SwitchComponent;
