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

export const SmsRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SmsRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_created" source="dateCreated" />
        <TextField label="date_sent" source="dateSent" />
        <TextField label="ID" source="id" />
        <TextField label="phone" source="phone" />
        <BooleanField label="sent" source="sent" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
