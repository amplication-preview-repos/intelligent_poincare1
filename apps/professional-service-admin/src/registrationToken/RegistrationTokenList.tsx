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

export const RegistrationTokenList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RegistrationTokens"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_created" source="dateCreated" />
        <TextField label="date_expires" source="dateExpires" />
        <TextField label="ID" source="id" />
        <TextField label="phone" source="phone" />
        <TextField label="token" source="token" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="used" source="used" />
      </Datagrid>
    </List>
  );
};
