import React  from "react";
import { List, Datagrid, TextField, DateField, EmailField, ChipField } from 'react-admin';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    Scheduled: { backgroundColor: '#f5cb0f', color: '#fff' },
    Completed: { backgroundColor: '#00e029', color: '#fff' },
});

const ColoredChipField = props => {
    const classes = useStyles();

    const isScheduled = v => v === 'Scheduled';
    const isCompleted = v => v === 'Completed';
    return (
        <ChipField
            className={classnames({
                [classes.Scheduled]: isScheduled(props.record[props.source]),
                [classes.Completed]: isCompleted(props.record[props.source]),
            })}
            {...props}
        />
    );
}
export const RotationList = props => {
    return  (
        <List {...props} bulkActionButtons={false}>
            <Datagrid>
                <TextField label="Student Name" source="studentname" />
                <TextField label="Doctor Name" source="doctorname" />
                <DateField label="Start Date"  source="rotation_start_date" options={{ year: 'numeric', month: 'long', day: 'numeric' }}/>
                <DateField label="End Date"  source="rotation_end_date" options={{ year: 'numeric', month: 'long', day: 'numeric' }}/>
                <EmailField label="Student Email" source="email" />
                <TextField label="Student Mobile" source="mobile" />
                <ColoredChipField label="Status" source="status" />
            </Datagrid>
        </List>
    )
};