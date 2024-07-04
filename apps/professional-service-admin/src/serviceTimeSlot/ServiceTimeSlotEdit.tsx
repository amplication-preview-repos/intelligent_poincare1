import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ServiceTimeSlotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" source="description" />
        <DateTimeInput label="timestamp_end" source="timestampEnd" />
        <DateTimeInput label="timestamp_start" source="timestampStart" />
      </SimpleForm>
    </Edit>
  );
};
