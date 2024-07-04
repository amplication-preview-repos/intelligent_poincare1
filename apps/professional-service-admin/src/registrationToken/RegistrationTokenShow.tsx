import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const RegistrationTokenShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_created" source="dateCreated" />
        <TextField label="date_expires" source="dateExpires" />
        <TextField label="ID" source="id" />
        <TextField label="phone" source="phone" />
        <TextField label="token" source="token" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="used" source="used" />
      </SimpleShowLayout>
    </Show>
  );
};
