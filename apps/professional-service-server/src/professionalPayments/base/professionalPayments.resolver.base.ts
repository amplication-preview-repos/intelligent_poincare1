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
import { ProfessionalPayments } from "./ProfessionalPayments";
import { ProfessionalPaymentsCountArgs } from "./ProfessionalPaymentsCountArgs";
import { ProfessionalPaymentsFindManyArgs } from "./ProfessionalPaymentsFindManyArgs";
import { ProfessionalPaymentsFindUniqueArgs } from "./ProfessionalPaymentsFindUniqueArgs";
import { CreateProfessionalPaymentsArgs } from "./CreateProfessionalPaymentsArgs";
import { UpdateProfessionalPaymentsArgs } from "./UpdateProfessionalPaymentsArgs";
import { DeleteProfessionalPaymentsArgs } from "./DeleteProfessionalPaymentsArgs";
import { ProfessionalPaymentsService } from "../professionalPayments.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProfessionalPayments)
export class ProfessionalPaymentsResolverBase {
  constructor(
    protected readonly service: ProfessionalPaymentsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ProfessionalPayments",
    action: "read",
    possession: "any",
  })
  async _professionalPaymentsItemsMeta(
    @graphql.Args() args: ProfessionalPaymentsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ProfessionalPayments])
  @nestAccessControl.UseRoles({
    resource: "ProfessionalPayments",
    action: "read",
    possession: "any",
  })
  async professionalPaymentsItems(
    @graphql.Args() args: ProfessionalPaymentsFindManyArgs
  ): Promise<ProfessionalPayments[]> {
    return this.service.professionalPaymentsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ProfessionalPayments, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ProfessionalPayments",
    action: "read",
    possession: "own",
  })
  async professionalPayments(
    @graphql.Args() args: ProfessionalPaymentsFindUniqueArgs
  ): Promise<ProfessionalPayments | null> {
    const result = await this.service.professionalPayments(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProfessionalPayments)
  @nestAccessControl.UseRoles({
    resource: "ProfessionalPayments",
    action: "create",
    possession: "any",
  })
  async createProfessionalPayments(
    @graphql.Args() args: CreateProfessionalPaymentsArgs
  ): Promise<ProfessionalPayments> {
    return await this.service.createProfessionalPayments({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ProfessionalPayments)
  @nestAccessControl.UseRoles({
    resource: "ProfessionalPayments",
    action: "update",
    possession: "any",
  })
  async updateProfessionalPayments(
    @graphql.Args() args: UpdateProfessionalPaymentsArgs
  ): Promise<ProfessionalPayments | null> {
    try {
      return await this.service.updateProfessionalPayments({
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

  @graphql.Mutation(() => ProfessionalPayments)
  @nestAccessControl.UseRoles({
    resource: "ProfessionalPayments",
    action: "delete",
    possession: "any",
  })
  async deleteProfessionalPayments(
    @graphql.Args() args: DeleteProfessionalPaymentsArgs
  ): Promise<ProfessionalPayments | null> {
    try {
      return await this.service.deleteProfessionalPayments(args);
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
