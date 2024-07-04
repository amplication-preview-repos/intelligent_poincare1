import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProfessionalAvailabilityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fk_day_of_week" source="fkDayOfWeek" />
        <TextInput label="fk_professional" source="fkProfessional" />
        <TextInput label="fk_time_slot" source="fkTimeSlot" />
      </SimpleForm>
    </Create>
  );
};
