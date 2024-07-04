import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ServiceQuoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fk_service_package" source="fkServicePackage" />
        <TextField label="fk_status" source="fkStatus" />
        <TextField label="fk_user" source="fkUser" />
        <TextField label="ID" source="id" />
        <TextField label="price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
