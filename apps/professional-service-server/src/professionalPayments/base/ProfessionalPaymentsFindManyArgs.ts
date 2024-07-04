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
import { ProfessionalPaymentsWhereInput } from "./ProfessionalPaymentsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ProfessionalPaymentsOrderByInput } from "./ProfessionalPaymentsOrderByInput";

@ArgsType()
class ProfessionalPaymentsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ProfessionalPaymentsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ProfessionalPaymentsWhereInput, { nullable: true })
  @Type(() => ProfessionalPaymentsWhereInput)
  where?: ProfessionalPaymentsWhereInput;

  @ApiProperty({
    required: false,
    type: [ProfessionalPaymentsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ProfessionalPaymentsOrderByInput], { nullable: true })
  @Type(() => ProfessionalPaymentsOrderByInput)
  orderBy?: Array<ProfessionalPaymentsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ProfessionalPaymentsFindManyArgs as ProfessionalPaymentsFindManyArgs };
