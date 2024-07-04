import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const AddressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Addresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="city" source="city" />
        <TextField label="complement" source="complement" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="fk_user_id" source="fkUserId" />
        <TextField label="ID" source="id" />
        <BooleanField label="main_address" source="mainAddress" />
        <TextField label="neighborhood" source="neighborhood" />
        <TextField label="number" source="numberField" />
        <TextField label="state" source="state" />
        <TextField label="street" source="street" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="zip_code" source="zipCode" />
      </Datagrid>
    </List>
  );
};
