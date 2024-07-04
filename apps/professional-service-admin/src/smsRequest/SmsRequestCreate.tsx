import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const SmsRequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date_created" source="dateCreated" />
        <DateTimeInput label="date_sent" source="dateSent" />
        <TextInput label="phone" source="phone" />
        <BooleanInput label="sent" source="sent" />
      </SimpleForm>
    </Create>
  );
};
