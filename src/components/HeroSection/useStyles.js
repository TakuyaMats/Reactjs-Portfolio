import { makeStyles } from '@mui/styles';
import theme from '../../utils/theme';

const useStyles = makeStyles(() => ({
    h1: {
        [theme.breakpoints.up('lg')]: {
            margin: 24,
            fontSize: 84,
            lineHeight: 1.2
        },
        [theme.breakpoints.down('lg')]: {
            marginLeft: '55px',
            fontSize: 60
        },
        [theme.breakpoints.down('md')]: {
            margin: 5,
            fontSize: 28,
            lineHeight: 1.5
        },
    },
    p: {
        [theme.breakpoints.up('lg')]: {
            fontSize: 18
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: 14,
            marginLeft: 72
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 14,
            marginLeft: 42,
            lineHeight: 2
        },
    },
}));

export default useStyles;