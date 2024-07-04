import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const AppointmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date_requested" source="dateRequested" />
        <DateTimeInput label="date_service" source="dateService" />
        <TextInput label="fk_address" source="fkAddress" />
        <TextInput label="fk_professional" source="fkProfessional" />
        <TextInput label="fk_service_package" source="fkServicePackage" />
        <TextInput label="fk_status" source="fkStatus" />
        <TextInput label="fk_time_slot" source="fkTimeSlot" />
        <TextInput label="fk_user" source="fkUser" />
        <BooleanInput label="reviewed" source="reviewed" />
      </SimpleForm>
    </Edit>
  );
};
