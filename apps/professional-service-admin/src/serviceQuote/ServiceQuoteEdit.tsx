import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ServiceQuoteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fk_service_package" source="fkServicePackage" />
        <TextInput label="fk_status" source="fkStatus" />
        <TextInput label="fk_user" source="fkUser" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
