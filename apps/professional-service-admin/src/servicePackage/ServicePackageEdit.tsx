import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const ServicePackageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <NumberInput label="fee_fixed" source="feeFixed" />
        <NumberInput label="fee_percentage" source="feePercentage" />
        <TextInput label="fk_service_type" source="fkServiceType" />
        <BooleanInput label="hidden" source="hidden" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Edit>
  );
};
