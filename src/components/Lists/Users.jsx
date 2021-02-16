import React  from "react";
import { List, Datagrid, TextField, DateField, EmailField, ChipField, ShowButton, Filter, SelectInput } from 'react-admin';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    EmailPending: { backgroundColor: '#2f77eb', color: '#fff' },
    Pending: { backgroundColor: '#f5cb0f', color: '#fff' },
    Active: { backgroundColor: '#9042f5', color: '#fff' },
    Rejected : {backgroundColor: '#820522', color: '#fff'},
    Deactivated : {backgroundColor: '#bd8908', color: '#fff'},
    Lead : {backgroundColor: '#bd8908', color: '#fff'},
});

const ColoredChipField = props => {
    const classes = useStyles();

    const isEmailPending = v => v === 'Email Verification Pending';
    const isPending = v => v === 'Pending';
    const isActive = v => v === 'Active';
    const isRejected = v => v === 'Rejected';
    const isDeactivated = v => v === 'Deactivated';
    const isLead = v => v === 'Lead';
    return (
        <ChipField
            className={classnames({
                [classes.EmailPending]: isEmailPending(props.record[props.source]),
                [classes.Pending]: isPending(props.record[props.source]),
                [classes.Active]: isActive(props.record[props.source]),
                [classes.Rejected]: isRejected(props.record[props.source]),
                [classes.Deactivated]: isDeactivated(props.record[props.source]),
                [classes.Lead]: isLead(props.record[props.source]),
            })}
            {...props}
        />
    );
}


const UserFilter = (props) => (
    <Filter {...props}>
        <SelectInput source="Status" choices={[
            { id: -1, name: 'Email Verification Pending' },
            { id: 0, name: 'Pending' },
            { id: 1, name: 'Active' },
            { id: 2, name: 'Rejected' },
            { id: 3, name: 'Deactivated' },
            { id: 5, name: 'Leads' },
        ]}/>

        {/* <TextInput label="Search" source="q" alwaysOn /> */}
        {/* <ReferenceInput label="User" source="user_id" reference="users" allowEmpty>
        </ReferenceInput> */}
    </Filter>
);

export const UserList = props => {
    return  (
        <List filters={<UserFilter />} {...props} bulkActionButtons={false}>
            <Datagrid>
                <TextField label="Name" source="fullname" />
                <DateField label="Registered At"  source="created_at" options={{ year: 'numeric', month: 'long', day: 'numeric' }}/>
                <EmailField label="Email" source="email" />
                <TextField label="Mobile" source="mobile" />
                <ColoredChipField label="Status" source="status" />
                <ShowButton />
            </Datagrid>
        </List>
    )
};