import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AuthTokenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fk_user" source="fkUser" />
        <TextInput label="token" source="token" />
      </SimpleForm>
    </Edit>
  );
};
