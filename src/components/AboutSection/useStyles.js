import { makeStyles } from '@mui/styles';
import theme from '../../utils/theme';

const useStyles = makeStyles(() => ({
    margin: {
        marginTop: '160px'
    },
    h3: {
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            justifyContent: 'center',
            marginRight: 10,
            fontSize: 38,
            lineHeight: 1.2
        },
        [theme.breakpoints.down('lg')]: {
            display: 'flex',
            justifyContent: 'center',
            fontSize: 28
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
        },
        [theme.breakpoints.down('md')]: {
            margin: 5,
            fontSize: 14,
            lineHeight: 2
        },
    },
    hr: {
        [theme.breakpoints.up('lg')]: {
            display: 'block',
            position: 'relative',
            padding: 0,
            margin: '8px auto',
            height: 0,
            width: '100%',
            maxHeight: 0,
            maxWidth: '45%',
            fontSize: '1px',
            lineHeight: 0,
            clear: 'both',
            border: 'none',
            borderTop: '1px solid #aaaaaa',
            borderBottom: '1px solid #ffffff',
        },
        [theme.breakpoints.down('lg')]: {
            display: 'block',
            position: 'relative',
            padding: 0,
            margin: '8px auto',
            height: 0,
            width: '100%',
            maxHeight: 0,
            maxWidth: '45%',
            fontSize: '1px',
            lineHeight: 0,
            clear: 'both',
            border: 'none',
            borderTop: '1px solid #aaaaaa',
            borderBottom: '1px solid #ffffff',
        },
        [theme.breakpoints.down('md')]: {
            display: 'block',
            position: 'relative',
            padding: 0,
            margin: '8px auto',
            height: 0,
            width: '100%',
            maxHeight: 0,
            maxWidth: '65%',
            fontSize: '1px',
            lineHeight: 0,
            clear: 'both',
            border: 'none',
            borderTop: '1px solid #aaaaaa',
            borderBottom: '1px solid #ffffff',
        }
    }
}));

export default useStyles;