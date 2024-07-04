import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ServiceQuoteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ServiceQuotes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="fk_service_package" source="fkServicePackage" />
        <TextField label="fk_status" source="fkStatus" />
        <TextField label="fk_user" source="fkUser" />
        <TextField label="ID" source="id" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
