import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="external_id" source="externalId" />
        <NumberInput label="fee" source="fee" />
        <TextInput label="fk_appointment" source="fkAppointment" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
