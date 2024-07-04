import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const RegistrationTokenCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date_created" source="dateCreated" />
        <DateTimeInput label="date_expires" source="dateExpires" />
        <TextInput label="phone" source="phone" />
        <TextInput label="token" source="token" />
        <BooleanInput label="used" source="used" />
      </SimpleForm>
    </Create>
  );
};
