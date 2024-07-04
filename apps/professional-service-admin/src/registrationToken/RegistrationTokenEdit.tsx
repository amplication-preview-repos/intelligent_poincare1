import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const RegistrationTokenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date_created" source="dateCreated" />
        <DateTimeInput label="date_expires" source="dateExpires" />
        <TextInput label="phone" source="phone" />
        <TextInput label="token" source="token" />
        <BooleanInput label="used" source="used" />
      </SimpleForm>
    </Edit>
  );
};
