import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ServiceTimeSlotCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" source="description" />
        <DateTimeInput label="timestamp_end" source="timestampEnd" />
        <DateTimeInput label="timestamp_start" source="timestampStart" />
      </SimpleForm>
    </Create>
  );
};
