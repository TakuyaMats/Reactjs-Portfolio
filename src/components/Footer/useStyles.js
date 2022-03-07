import { makeStyles } from '@mui/styles';
import theme from '../../utils/theme';

const useStyles = makeStyles(() => ({
    padding: {
        paddingTop: '8rem',
    },
    container: {
        display: 'flex',
        gap: '4rem',
    },
    footer_col1: {
        flex: 2
    },
    footer_col2: {
        flex: 1
    },
    footer__col1__title: {
        fontSize: '2.2rem',
        marginBottom: '28px'
    },
    media: {
        [theme.breakpoints.up('lg')]: {
            marginTop: '160px'
        },
        [theme.breakpoints.down('lg')]: {
            marginTop: '140px'
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '100px'
        },
    },
}));

export default useStyles;