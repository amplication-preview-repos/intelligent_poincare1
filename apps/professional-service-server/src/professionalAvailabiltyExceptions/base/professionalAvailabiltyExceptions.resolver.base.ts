/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { ProfessionalAvailabiltyExceptions } from "./ProfessionalAvailabiltyExceptions";
import { ProfessionalAvailabiltyExceptionsCountArgs } from "./ProfessionalAvailabiltyExceptionsCountArgs";
import { ProfessionalAvailabiltyExceptionsFindManyArgs } from "./ProfessionalAvailabiltyExceptionsFindManyArgs";
import { ProfessionalAvailabiltyExceptionsFindUniqueArgs } from "./ProfessionalAvailabiltyExceptionsFindUniqueArgs";
import { CreateProfessionalAvailabiltyExceptionsArgs } from "./CreateProfessionalAvailabiltyExceptionsArgs";
import { UpdateProfessionalAvailabiltyExceptionsArgs } from "./UpdateProfessionalAvailabiltyExceptionsArgs";
import { DeleteProfessionalAvailabiltyExceptionsArgs } from "./DeleteProfessionalAvailabiltyExceptionsArgs";
import { ProfessionalAvailabiltyExceptionsService } from "../professionalAvailabiltyExceptions.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProfessionalAvailabiltyExceptions)
export class ProfessionalAvailabiltyExceptionsResolverBase {
  constructor(
    protected readonly service: ProfessionalAvailabiltyExceptionsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProfessionalAvailabiltyExceptions",
    action: "read",
    possession: "any",
  })
  async _professionalAvailabiltyExceptionsItemsMeta(
    @graphql.Args() args: ProfessionalAvailabiltyExceptionsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ProfessionalAvailabiltyExceptions])
  @nestAccessControl.UseRoles({
    resource: "ProfessionalAvailabiltyExceptions",
    action: "read",
    possession: "any",
  })
  async professionalAvailabiltyExceptionsItems(
    @graphql.Args() args: ProfessionalAvailabiltyExceptionsFindManyArgs
  ): Promise<ProfessionalAvailabiltyExceptions[]> {
    return this.service.professionalAvailabiltyExceptionsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ProfessionalAvailabiltyExceptions, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProfessionalAvailabiltyExceptions",
    action: "read",
    possession: "own",
  })
  async professionalAvailabiltyExceptions(
    @graphql.Args() args: ProfessionalAvailabiltyExceptionsFindUniqueArgs
  ): Promise<ProfessionalAvailabiltyExceptions | null> {
    const result = await this.service.professionalAvailabiltyExceptions(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProfessionalAvailabiltyExceptions)
  @nestAccessControl.UseRoles({
    resource: "ProfessionalAvailabiltyExceptions",
    action: "create",
    possession: "any",
  })
  async createProfessionalAvailabiltyExceptions(
    @graphql.Args() args: CreateProfessionalAvailabiltyExceptionsArgs
  ): Promise<ProfessionalAvailabiltyExceptions> {
    return await this.service.createProfessionalAvailabiltyExceptions({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProfessionalAvailabiltyExceptions)
  @nestAccessControl.UseRoles({
    resource: "ProfessionalAvailabiltyExceptions",
    action: "update",
    possession: "any",
  })
  async updateProfessionalAvailabiltyExceptions(
    @graphql.Args() args: UpdateProfessionalAvailabiltyExceptionsArgs
  ): Promise<ProfessionalAvailabiltyExceptions | null> {
    try {
      return await this.service.updateProfessionalAvailabiltyExceptions({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ProfessionalAvailabiltyExceptions)
  @nestAccessControl.UseRoles({
    resource: "ProfessionalAvailabiltyExceptions",
    action: "delete",
    possession: "any",
  })
  async deleteProfessionalAvailabiltyExceptions(
    @graphql.Args() args: DeleteProfessionalAvailabiltyExceptionsArgs
  ): Promise<ProfessionalAvailabiltyExceptions | null> {
    try {
      return await this.service.deleteProfessionalAvailabiltyExceptions(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
