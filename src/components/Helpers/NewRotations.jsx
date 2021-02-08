import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import { makeStyles } from '@material-ui/core/styles';
import { useTranslate } from 'react-admin';
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
}));

const NewRotations = () => {
    const classes = useStyles();
    const translate = useTranslate();

    const orders = [
        {
            id : 1,
            avatar : 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
            date : '2020-12-02',
            studentName : 'saad'
        }
    ];

    return (
        <Card className={classes.root}>
            <CardHeader title={translate('New Rotations')} />
            <List dense={true}>
                {orders.map(record => (
                    <ListItem
                        key={record.id}
                        button
                        // component={Link}
                        // to={`/commands/${record.id}`}
                    >
                        <ListItemAvatar>
                            {record.avatar ? (
                                <Avatar
                                    src={`${
                                        record.avatar
                                    }?size=32x32`}
                                />
                            ) : (
                                <Avatar />
                            )}
                        </ListItemAvatar>
                        <ListItemText
                            primary={new Date(record.date).toLocaleString(
                                'en-GB'
                            )}
                            secondary={
                                <span>
                                    {record.studentName}
                                </span>
                            }
                        />
                        <ListItemSecondaryAction>
                            <span className={classes.cost}>
                                {56}$
                            </span>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <Box flexGrow="1">&nbsp;</Box>
            <Box textAlign='center'>
                <Button variant='contained'>
                    View All Rotations
                </Button>
            </Box>
            {/* <Button
                className={classes.link}
                // component={Link}
                // to="/reviews"
                size="small"
                color="primary"
            >
                <Box p={1} className={classes.linkContent}>
                    {translate('pos.dashboard.all_reviews')}
                </Box>
            </Button> */}
        </Card>
    );
}

export default NewRotations;