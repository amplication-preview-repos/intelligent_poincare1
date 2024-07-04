import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ProfessionalAvailabiltyExceptionsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="fk_professional" source="fkProfessional" />
        <TextInput label="fk_time_slot" source="fkTimeSlot" />
      </SimpleForm>
    </Create>
  );
};
