import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ProfessionalAvailabiltyExceptionsEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <TextInput label="fk_professional" source="fkProfessional" />
        <TextInput label="fk_time_slot" source="fkTimeSlot" />
      </SimpleForm>
    </Edit>
  );
};
