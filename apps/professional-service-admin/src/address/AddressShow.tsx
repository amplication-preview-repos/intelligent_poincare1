import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
