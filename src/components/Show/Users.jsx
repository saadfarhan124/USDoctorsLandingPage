import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, EmailField } from 'react-admin';
export const UserShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" disabled/>
            <EmailField source="email" />
            <TextField source="fullname" />
            <DateField label="Registered date" source="created_at" options={{ year: 'numeric', month: 'long', day: 'numeric' }}/>
            <TextField source="mobile" />

        </SimpleShowLayout>
    </Show>
);