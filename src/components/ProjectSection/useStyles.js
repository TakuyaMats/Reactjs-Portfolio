import { makeStyles } from '@mui/styles';
import theme from '../../utils/theme';

const useStyles = makeStyles(() => ({
    projects__allItems: {
        border: '2px solid #74d175',
        borderCollapse: 'separate',
        borderSpacing: '30px',
        borderRadius: '30px',
        'border-radius': '50% 40% 40% 40% / 80% 20% 80% 25%',
        display: 'flex',
        gap: '3rem',
        marginTop: '5rem',
    },
    h3: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    p: {
        color: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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