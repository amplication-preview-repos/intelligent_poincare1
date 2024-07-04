import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="city" source="city" />
        <TextInput label="complement" source="complement" />
        <TextInput label="fk_user_id" source="fkUserId" />
        <BooleanInput label="main_address" source="mainAddress" />
        <TextInput label="neighborhood" source="neighborhood" />
        <TextInput label="number" source="numberField" />
        <TextInput label="state" source="state" />
        <TextInput label="street" source="street" />
        <TextInput label="zip_code" source="zipCode" />
      </SimpleForm>
    </Create>
  );
};
