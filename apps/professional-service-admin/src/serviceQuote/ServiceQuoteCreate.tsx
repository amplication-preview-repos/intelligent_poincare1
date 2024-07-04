import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ServiceQuoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fk_service_package" source="fkServicePackage" />
        <TextInput label="fk_status" source="fkStatus" />
        <TextInput label="fk_user" source="fkUser" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Create>
  );
};
