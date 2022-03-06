import { makeStyles } from '@mui/styles';
import theme from '../../utils/theme';

const useStyles = makeStyles(() => ({
    margin: {
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
    h4: {
        [theme.breakpoints.up('lg')]: {
            fontSize: 28,
            marginRight: 18,
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: 16,
            marginLeft: 5
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 14,
            marginLeft: 25,
        },
    },
    a: {
        color: 'white'
    },
    p: {
        display: 'flex',
        justifyContent: 'center',
        color: 'grey',
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
    },
    image: {
        [theme.breakpoints.up('lg')]: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: 120,
        }
    },
    aboutMeImage: {
        height: '100%',
        width: '100%',
        align: 'center',
    },
    btn: {
        [theme.breakpoints.up('lg')]: {
            textColor: 'white',
            margin: 8,
            marginTop: 20,
            fontSize: 17,
        },
        [theme.breakpoints.down('lg')]: {
            marginTop: 20,
            fontSize: 14,
        },
        [theme.breakpoints.down('md')]: {
            marginTop: 20,
            fontSize: 6,
        },
    },
}));

export default useStyles;