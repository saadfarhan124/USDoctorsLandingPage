import React from 'react';
import { Login } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

import LoginBg from '../../loginbg.jpg'
import Logo from '../../logo.png';

const styles = ({
    main: { 
        backgroundImage: `url(${LoginBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    avatar: {
        backgroundImage: `url(${Logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 80,
    },
    button: {
        backgroundColor : "#fff",
    },
    icon: { display: 'none' },
});



const CustomLoginPage = props => (
    <Login
      
        {...props}
    />
);

export default withStyles(styles)(CustomLoginPage);