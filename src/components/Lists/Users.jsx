import React  from "react";
import { List, Datagrid, TextField, DateField, EmailField, ChipField, ShowButton, Filter, SelectInput } from 'react-admin';

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
                <ChipField label="Rotations enrolled" source="scheduledRotations" />
                <ChipField label="Status" source="status" />
                <ShowButton />
            </Datagrid>
        </List>
    )
};