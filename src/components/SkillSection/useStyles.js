import { makeStyles } from '@mui/styles';
import theme from '../../utils/theme';

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '80px',
    },
    paper: {
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        backgroundColor: '#E5E8DD',
        maxHeight: '100%',
        marginTop: 12,
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '33%'
        }
    },
    singlePaper: {
        [theme.breakpoints.down('md')]: {
            marginBottom: '5%',
        },
        h4: {
            marginLeft: '65px'
        } 
    },
    h4: {
        marginTop: '12px',
        [theme.breakpoints.down('lg')]: {
            marginLeft: '55px'
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '115px'
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '115px'
        },
    },
    listItem1: {
        [theme.breakpoints.up('lg')]: {
            marginLeft: 22
        },
        [theme.breakpoints.down('lg')]: {
            marginLeft: 1
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 22
        },
    },
    listItem2: {
        [theme.breakpoints.up('lg')]: {
            marginLeft: 30
        },
        [theme.breakpoints.down('lg')]: {
            marginLeft: -10
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 30
        },
    },
    listItem3: {
        [theme.breakpoints.up('lg')]: {
            marginLeft: 10
        },
        [theme.breakpoints.down('lg')]: {
            marginLeft: -10
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 10
        },
    },
    listItem4: {
        [theme.breakpoints.up('lg')]: {
            marginLeft: 80
        },
        [theme.breakpoints.down('lg')]: {
            marginLeft: -10
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 80
        },
    },
    listItem5: {
        [theme.breakpoints.up('lg')]: {
            marginLeft: 22
        },
        [theme.breakpoints.down('lg')]: {
            marginLeft: -8
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 22
        },
    },
    listItem6: {
        [theme.breakpoints.up('lg')]: {
            marginLeft: 50
        },
        [theme.breakpoints.down('lg')]: {
            marginLeft: -8
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 50
        },
    },
    listItem7: {
        [theme.breakpoints.up('lg')]: {
            marginLeft: 110
        },
        [theme.breakpoints.down('lg')]: {
            marginLeft: -8
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 110
        },
    },
    listItem8: {
        [theme.breakpoints.up('lg')]: {
            marginLeft: 40
        },
        [theme.breakpoints.down('lg')]: {
            marginLeft: -8
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 40
        },
    },
    p1: {
        [theme.breakpoints.up('lg')]: {
            fontSize: 18, 
            marginRight: '2rem'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
            marginRight: '1rem',
            marginBottom: -20,
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 18, 
            marginRight: '2rem',
            marginBottom: 10,
        },
    },
    p2: {
        [theme.breakpoints.up('lg')]: {
            fontSize: 18, 
            marginRight: '2rem'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
            marginRight: '1rem',
            marginBottom: -20,
            marginLeft: 10
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 18, 
            marginRight: '2rem',
            marginBottom: 10,
        },
    },
    p3: {
        [theme.breakpoints.up('lg')]: {
            fontSize: 18, 
            marginRight: '2rem'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
            marginRight: 1,
            marginBottom: -20,
            marginLeft: 6
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 18, 
            marginRight: '2rem',
            marginBottom: 10
        },
    },
    p4: {
        [theme.breakpoints.up('lg')]: {
            fontSize: 18, 
            marginRight: '2rem'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
            marginRight: 1,
            marginBottom: -20,
            marginLeft: 30
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 18, 
            marginRight: '2rem',
            marginLeft: 5,
            marginBottom: 10,
        },
    },
    p5: {
        [theme.breakpoints.up('lg')]: {
            fontSize: 18, 
            marginRight: '2rem'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
            marginRight: '1rem',
            marginBottom: -20,
            marginLeft: 60
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 18, 
            marginRight: '2rem',
            marginLeft: 5
        },
    },
    p6: {
        [theme.breakpoints.up('lg')]: {
            fontSize: 18, 
            marginRight: '2rem'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
            marginRight: 1,
            marginBottom: -20,
            marginLeft: 6
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 18, 
            marginRight: 8,
            marginBottom: 10
        },
    },
    p7: {
        [theme.breakpoints.up('lg')]: {
            fontSize: 18, 
            marginRight: '2rem'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: 13,
            marginRight: 1,
            marginBottom: -20,
            marginLeft: 70
        },
        [theme.breakpoints.down('md')]: {
            fontSize: 18, 
            marginRight: 8,
            marginBottom: 10,
            marginLeft: 20
        },
    },
    tablet: {
        [theme.breakpoints.down('lg')]: {
            width: 220,
            height: 320
        },
        [theme.breakpoints.down('md')]: {
            height: 440,
            width: 350,
        }
    },
    tablet_1: {
        height: 440,
        width: 350,
        backgroundColor: '#E5E8DD',
        border: '2px solid #479547',
        'border-radius': '20% 40% 40% 40% / 80% 20% 30% 25%',
        [theme.breakpoints.down('lg')]: {
            width: 220,
            height: 320
        },
        [theme.breakpoints.down('md')]: {
            height: 440,
            width: 350,
        }
    },
    tablet_2: {
        height: 440,
        width: 350,
        backgroundColor: '#E5E8DD',
        border: '2px solid #479547',
        'border-radius': '20% 80% 40% 20% / 100% 30% 60% 85%',
        [theme.breakpoints.down('lg')]: {
            width: 220,
            height: 320
        },
        [theme.breakpoints.down('md')]: {
            height: 440,
            width: 350,
        }
    },
    tablet_3: {
        height: 440,
        width: 350,
        backgroundColor: '#E5E8DD',
        border: '2px solid #479547',
        'border-radius': '20% 40% 60% 20% / 30% 50% 30% 25%',
        [theme.breakpoints.down('lg')]: {
            width: 220,
            height: 320
        },
        [theme.breakpoints.down('md')]: {
            height: 440,
            width: 350,
        }
    },
    img_1: {
        height: '20%', 
        width: '25%', 
        marginLeft: '85px', 
        marginTop: '12px', 
        marginBottom: '2px'
    },
    img_2: {
        height: '20%', 
        width: '25%', 
        marginLeft: '85px', 
        marginTop: '12px', 
        marginBottom: '4px'
    },
    img_3: {
        height: '20%', 
        width: '25%', 
        marginLeft: '85px', 
        marginTop: '12px', 
        marginBottom: '6px'
    },
}));

export default useStyles;