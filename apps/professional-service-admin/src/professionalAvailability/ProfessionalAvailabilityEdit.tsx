import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProfessionalAvailabilityEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fk_day_of_week" source="fkDayOfWeek" />
        <TextInput label="fk_professional" source="fkProfessional" />
        <TextInput label="fk_time_slot" source="fkTimeSlot" />
      </SimpleForm>
    </Edit>
  );
};
