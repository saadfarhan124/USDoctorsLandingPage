import React  from "react";
import { List, Datagrid, TextField, DateField, EmailField, ChipField, ShowButton } from 'react-admin';
export const UserList = props => {
    return  (
        <List {...props} bulkActionButtons={false}>
            <Datagrid>
                <TextField label="Name" source="fullname" />
                <DateField label="Registered At"  source="created_at" options={{ year: 'numeric', month: 'long', day: 'numeric' }}/>
                <EmailField label="Email" source="email" />
                <TextField label="Mobile" source="mobile" />
                <ChipField label="Rotations enrolled" source="scheduledRotations" />
                <ShowButton />
            </Datagrid>
        </List>
    )
};