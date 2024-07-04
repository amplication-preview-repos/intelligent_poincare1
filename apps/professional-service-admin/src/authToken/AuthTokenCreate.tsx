import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AuthTokenCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fk_user" source="fkUser" />
        <TextInput label="token" source="token" />
      </SimpleForm>
    </Create>
  );
};
