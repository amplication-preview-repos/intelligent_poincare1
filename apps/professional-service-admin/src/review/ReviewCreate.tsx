import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="fk_appointment" source="fkAppointment" />
        <NumberInput step={1} label="score" source="score" />
      </SimpleForm>
    </Create>
  );
};
