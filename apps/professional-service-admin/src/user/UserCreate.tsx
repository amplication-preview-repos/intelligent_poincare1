import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="cpf" source="cpf" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <BooleanInput label="is_active" source="isActive" />
        <BooleanInput label="is_professional" source="isProfessional" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="name" source="name" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="phone" source="phone" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="url_avatar" source="urlAvatar" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
