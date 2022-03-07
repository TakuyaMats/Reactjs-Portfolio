import { makeStyles } from '@mui/styles';
import theme from '../../utils/theme';

const useStyles = makeStyles(() => ({
    appBar: {
        marginBottom: 2, 
        backgroundColor: '#E5E8DD',
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