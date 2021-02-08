import React  from "react";
import { List, Datagrid, TextField, DateField, EmailField, ChipField, Filter, ReferenceInput, SelectInput } from 'react-admin';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    Scheduled: { backgroundColor: '#2f77eb', color: '#fff' },
    Completed: { backgroundColor: '#00e029', color: '#fff' },
    Pending: { backgroundColor: '#f5cb0f', color: '#fff' },
    PaymentPending : {backgroundColor: '#bd8908', color: '#fff'},
    Rejected : {backgroundColor: '#820522', color: '#fff'},
});

const ColoredChipField = props => {
    const classes = useStyles();

    const isScheduled = v => v === 'Scheduled';
    const isCompleted = v => v === 'Completed';
    const isPending = v => v === 'Pending';
    const isPaymentPending = v => v === 'Payment Pending';
    const isRejected = v => v === 'Rejected';
    return (
        <ChipField
            className={classnames({
                [classes.Scheduled]: isScheduled(props.record[props.source]),
                [classes.Completed]: isCompleted(props.record[props.source]),
                [classes.Pending]: isPending(props.record[props.source]),
                [classes.PaymentPending]: isPaymentPending(props.record[props.source]),
                [classes.Rejected]: isRejected(props.record[props.source]),
            })}
            {...props}
        />
    );
}

const RotationFilter = (props) => (
    <Filter {...props}>
        {/* <TextInput label="Search" source="q" alwaysOn /> */}
        <ReferenceInput label="User" source="user_id" reference="users" allowEmpty>
            <SelectInput optionText="fullname" />
        </ReferenceInput>
    </Filter>
);

export const RotationList = props => {
    return  (
        <List filters={<RotationFilter />} {...props}>
            <Datagrid>
                <TextField label="Student Name" source="studentname" />
                <TextField label="Doctor Name" source="doctorname" />
                <DateField label="Start Date"  source="rotation_start_date" options={{ year: 'numeric', month: 'long', day: 'numeric' }}/>
                <DateField label="End Date"  source="rotation_end_date" options={{ year: 'numeric', month: 'long', day: 'numeric' }}/>
                <EmailField label="Student Email" source="email" />
                <TextField label="Student Mobile" source="mobile" />
                <ColoredChipField label="Status" source="rotation_status" />
            </Datagrid>
        </List>
    )
};