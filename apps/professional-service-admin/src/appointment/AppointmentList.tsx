import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AppointmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Appointments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_requested" source="dateRequested" />
        <TextField label="date_service" source="dateService" />
        <TextField label="fk_address" source="fkAddress" />
        <TextField label="fk_professional" source="fkProfessional" />
        <TextField label="fk_service_package" source="fkServicePackage" />
        <TextField label="fk_status" source="fkStatus" />
        <TextField label="fk_time_slot" source="fkTimeSlot" />
        <TextField label="fk_user" source="fkUser" />
        <TextField label="ID" source="id" />
        <BooleanField label="reviewed" source="reviewed" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
