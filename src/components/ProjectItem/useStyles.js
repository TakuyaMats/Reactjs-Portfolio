import { makeStyles } from '@mui/styles';
import theme from '../../utils/theme';

const useStyles = makeStyles(() => ({
    projectItem__img: {
        width: '100%',
        height: '400px',
        overflow: 'hidden',
        borderRadius: '12px',
        display: 'inline-block',
        border: '3px solid var(--gray-2)',
    },
    projectItem__button: {
        marginTop: 12,
    },
    projectItem__Info: {
        marginTop: '1rem',
        padding: '1rem',
        borderRadius: '12px',
    },
    p: {
        color: 'grey',
        [theme.breakpoints.up('lg')]: {
            marginTop: 12,
            fontSize: 18
        },
        [theme.breakpoints.down('lg')]: {
            marginTop: 12,
            fontSize: 16,
        },
        [theme.breakpoints.down('md')]: {
            marginTop: 12,
            margin: 5,
            fontSize: 15,
            lineHeight: 2
        },
    },
}));

export default useStyles;