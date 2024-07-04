import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="external_id" source="externalId" />
        <NumberInput label="fee" source="fee" />
        <TextInput label="fk_appointment" source="fkAppointment" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
