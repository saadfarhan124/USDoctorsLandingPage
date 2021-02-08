import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    Box,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
    },
    cost: {
        marginRight: '1em',
        color: theme.palette.text.primary,
    },
    link: {
        borderRadius: 0,
        
    },
    linkContent: {
        color: theme.palette.primary.main,
    },
    button:{
        backgroundColor: '#fff',
        color: '#000000'
    }
}));

const NewRotations = ({list}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title={'New Rotations'} />
            <List dense={true}>
                {list && list.map(record => (
                    <ListItem
                        key={record.id}
                        button
                    >
                        <ListItemAvatar>
                            {record.photo ? (
                                <Avatar
                                    src={
                                        `http://localhost/usdoctors/uploads/student/${record.photo}?size=32x32`}
                                />
                            ) : (
                                <Avatar />
                            )}
                        </ListItemAvatar>
                        <ListItemText
                            primary={new Date(record.created_date).toLocaleString(
                                'en-GB'
                            )}
                            secondary={
                                <span>
                                    {record.studentname}
                                </span>
                            }
                        />
                        <ListItemSecondaryAction>
                            <span className={classes.cost}>
                                {record.doctorname}
                            </span>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <Box flexGrow="1">&nbsp;</Box>
            <Box textAlign='center'>
                <Button style={{  
                    backgroundColor: '#fff',
                    color: '#000000',
                    margin: '15px'
                }} variant='contained'>
                    View All Rotations
                </Button>
            </Box>
        </Card>
    );
}

export default NewRotations;