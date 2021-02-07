import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Logo from '../logo.png';

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
    image:{
        width: '200px',
        height : 'auto'
    }
});

const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                
            >
            </Typography>
            <img src={Logo} alt="" srcset=""  className={classes.image}/>
            <span className={classes.spacer} />
        </AppBar>
    );
};

export default MyAppBar;