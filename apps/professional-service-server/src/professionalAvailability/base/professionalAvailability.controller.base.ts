/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ProfessionalAvailabilityService } from "../professionalAvailability.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ProfessionalAvailabilityCreateInput } from "./ProfessionalAvailabilityCreateInput";
import { ProfessionalAvailability } from "./ProfessionalAvailability";
import { ProfessionalAvailabilityFindManyArgs } from "./ProfessionalAvailabilityFindManyArgs";
import { ProfessionalAvailabilityWhereUniqueInput } from "./ProfessionalAvailabilityWhereUniqueInput";
import { ProfessionalAvailabilityUpdateInput } from "./ProfessionalAvailabilityUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ProfessionalAvailabilityControllerBase {
  constructor(
    protected readonly service: ProfessionalAvailabilityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ProfessionalAvailability })
  @nestAccessControl.UseRoles({
    resource: "ProfessionalAvailability",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProfessionalAvailability(
    @common.Body() data: ProfessionalAvailabilityCreateInput
  ): Promise<ProfessionalAvailability> {
    return await this.service.createProfessionalAvailability({
      data: data,
      select: {
        createdAt: true,
        fkDayOfWeek: true,
        fkProfessional: true,
        fkTimeSlot: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [ProfessionalAvailability] })
  @ApiNestedQuery(ProfessionalAvailabilityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ProfessionalAvailability",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async professionalAvailabilities(
    @common.Req() request: Request
  ): Promise<ProfessionalAvailability[]> {
    const args = plainToClass(
      ProfessionalAvailabilityFindManyArgs,
      request.query
    );
    return this.service.professionalAvailabilities({
      ...args,
      select: {
        createdAt: true,
        fkDayOfWeek: true,
        fkProfessional: true,
        fkTimeSlot: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ProfessionalAvailability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProfessionalAvailability",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async professionalAvailability(
    @common.Param() params: ProfessionalAvailabilityWhereUniqueInput
  ): Promise<ProfessionalAvailability | null> {
    const result = await this.service.professionalAvailability({
      where: params,
      select: {
        createdAt: true,
        fkDayOfWeek: true,
        fkProfessional: true,
        fkTimeSlot: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ProfessionalAvailability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProfessionalAvailability",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProfessionalAvailability(
    @common.Param() params: ProfessionalAvailabilityWhereUniqueInput,
    @common.Body() data: ProfessionalAvailabilityUpdateInput
  ): Promise<ProfessionalAvailability | null> {
    try {
      return await this.service.updateProfessionalAvailability({
        where: params,
        data: data,
        select: {
          createdAt: true,
          fkDayOfWeek: true,
          fkProfessional: true,
          fkTimeSlot: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ProfessionalAvailability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ProfessionalAvailability",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProfessionalAvailability(
    @common.Param() params: ProfessionalAvailabilityWhereUniqueInput
  ): Promise<ProfessionalAvailability | null> {
    try {
      return await this.service.deleteProfessionalAvailability({
        where: params,
        select: {
          createdAt: true,
          fkDayOfWeek: true,
          fkProfessional: true,
          fkTimeSlot: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
