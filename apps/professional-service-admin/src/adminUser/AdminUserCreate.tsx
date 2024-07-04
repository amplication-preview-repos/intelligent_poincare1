import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AdminUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="password" source="password" />
        <TextInput label="passwordService" source="passwordService" />
        <TextInput label="rolesBuilder" source="rolesBuilder" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
