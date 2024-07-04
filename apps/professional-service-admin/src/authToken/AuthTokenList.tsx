import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AuthTokenList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AuthTokens"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="fk_user" source="fkUser" />
        <TextField label="ID" source="id" />
        <TextField label="token" source="token" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
