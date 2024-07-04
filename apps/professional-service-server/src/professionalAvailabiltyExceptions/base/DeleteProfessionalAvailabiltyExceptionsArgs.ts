/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProfessionalAvailabiltyExceptionsWhereUniqueInput } from "./ProfessionalAvailabiltyExceptionsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteProfessionalAvailabiltyExceptionsArgs {
  @ApiProperty({
    required: true,
    type: () => ProfessionalAvailabiltyExceptionsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProfessionalAvailabiltyExceptionsWhereUniqueInput)
  @Field(() => ProfessionalAvailabiltyExceptionsWhereUniqueInput, {
    nullable: false,
  })
  where!: ProfessionalAvailabiltyExceptionsWhereUniqueInput;
}

export { DeleteProfessionalAvailabiltyExceptionsArgs as DeleteProfessionalAvailabiltyExceptionsArgs };
