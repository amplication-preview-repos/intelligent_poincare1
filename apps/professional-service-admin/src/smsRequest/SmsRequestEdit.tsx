import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const SmsRequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date_created" source="dateCreated" />
        <DateTimeInput label="date_sent" source="dateSent" />
        <TextInput label="phone" source="phone" />
        <BooleanInput label="sent" source="sent" />
      </SimpleForm>
    </Edit>
  );
};
