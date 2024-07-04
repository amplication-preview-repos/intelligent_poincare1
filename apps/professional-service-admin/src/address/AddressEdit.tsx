import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
