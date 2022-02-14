import { orange } from '@mui/material/colors';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const theme = createTheme({
    status: {
        danger: orange[500],
    },
});

export default theme;