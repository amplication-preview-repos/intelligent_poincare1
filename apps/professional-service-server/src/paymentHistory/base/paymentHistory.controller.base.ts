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
import { PaymentHistoryService } from "../paymentHistory.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PaymentHistoryCreateInput } from "./PaymentHistoryCreateInput";
import { PaymentHistory } from "./PaymentHistory";
import { PaymentHistoryFindManyArgs } from "./PaymentHistoryFindManyArgs";
import { PaymentHistoryWhereUniqueInput } from "./PaymentHistoryWhereUniqueInput";
import { PaymentHistoryUpdateInput } from "./PaymentHistoryUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PaymentHistoryControllerBase {
  constructor(
    protected readonly service: PaymentHistoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PaymentHistory })
  @nestAccessControl.UseRoles({
    resource: "PaymentHistory",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPaymentHistory(
    @common.Body() data: PaymentHistoryCreateInput
  ): Promise<PaymentHistory> {
    return await this.service.createPaymentHistory({
      data: data,
      select: {
        createdAt: true,
        fkPayment: true,
        fkPaymentStatus: true,
        id: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PaymentHistory] })
  @ApiNestedQuery(PaymentHistoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PaymentHistory",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paymentHistories(
    @common.Req() request: Request
  ): Promise<PaymentHistory[]> {
    const args = plainToClass(PaymentHistoryFindManyArgs, request.query);
    return this.service.paymentHistories({
      ...args,
      select: {
        createdAt: true,
        fkPayment: true,
        fkPaymentStatus: true,
        id: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PaymentHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentHistory",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async paymentHistory(
    @common.Param() params: PaymentHistoryWhereUniqueInput
  ): Promise<PaymentHistory | null> {
    const result = await this.service.paymentHistory({
      where: params,
      select: {
        createdAt: true,
        fkPayment: true,
        fkPaymentStatus: true,
        id: true,
        timestamp: true,
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
  @swagger.ApiOkResponse({ type: PaymentHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentHistory",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePaymentHistory(
    @common.Param() params: PaymentHistoryWhereUniqueInput,
    @common.Body() data: PaymentHistoryUpdateInput
  ): Promise<PaymentHistory | null> {
    try {
      return await this.service.updatePaymentHistory({
        where: params,
        data: data,
        select: {
          createdAt: true,
          fkPayment: true,
          fkPaymentStatus: true,
          id: true,
          timestamp: true,
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
  @swagger.ApiOkResponse({ type: PaymentHistory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PaymentHistory",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePaymentHistory(
    @common.Param() params: PaymentHistoryWhereUniqueInput
  ): Promise<PaymentHistory | null> {
    try {
      return await this.service.deletePaymentHistory({
        where: params,
        select: {
          createdAt: true,
          fkPayment: true,
          fkPaymentStatus: true,
          id: true,
          timestamp: true,
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
