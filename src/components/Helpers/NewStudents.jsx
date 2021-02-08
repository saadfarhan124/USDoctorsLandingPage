import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    Box,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Card,
    CardHeader
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
    },
    cost: {
        marginRight: '1em',
        color: theme.palette.text.primary,
    },
}));

const NewStudents = ({list}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title={'New Students'} />
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
                            primary={new Date(record.created_at).toLocaleString(
                                'en-GB'
                            )}
                            secondary={
                                <span>
                                    {record.fullname}
                                </span>
                            }
                        />
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
                    View All Students
                </Button>
            </Box>
        </Card>
    );
}

export default NewStudents;