import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="fk_appointment" source="fkAppointment" />
        <NumberInput step={1} label="score" source="score" />
      </SimpleForm>
    </Edit>
  );
};
