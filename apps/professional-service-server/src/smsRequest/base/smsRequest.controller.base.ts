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
import { SmsRequestService } from "../smsRequest.service";
import { SmsRequestCreateInput } from "./SmsRequestCreateInput";
import { SmsRequest } from "./SmsRequest";
import { SmsRequestFindManyArgs } from "./SmsRequestFindManyArgs";
import { SmsRequestWhereUniqueInput } from "./SmsRequestWhereUniqueInput";
import { SmsRequestUpdateInput } from "./SmsRequestUpdateInput";

export class SmsRequestControllerBase {
  constructor(protected readonly service: SmsRequestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SmsRequest })
  async createSmsRequest(
    @common.Body() data: SmsRequestCreateInput
  ): Promise<SmsRequest> {
    return await this.service.createSmsRequest({
      data: data,
      select: {
        createdAt: true,
        dateCreated: true,
        dateSent: true,
        id: true,
        phone: true,
        sent: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SmsRequest] })
  @ApiNestedQuery(SmsRequestFindManyArgs)
  async smsRequests(@common.Req() request: Request): Promise<SmsRequest[]> {
    const args = plainToClass(SmsRequestFindManyArgs, request.query);
    return this.service.smsRequests({
      ...args,
      select: {
        createdAt: true,
        dateCreated: true,
        dateSent: true,
        id: true,
        phone: true,
        sent: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SmsRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async smsRequest(
    @common.Param() params: SmsRequestWhereUniqueInput
  ): Promise<SmsRequest | null> {
    const result = await this.service.smsRequest({
      where: params,
      select: {
        createdAt: true,
        dateCreated: true,
        dateSent: true,
        id: true,
        phone: true,
        sent: true,
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SmsRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSmsRequest(
    @common.Param() params: SmsRequestWhereUniqueInput,
    @common.Body() data: SmsRequestUpdateInput
  ): Promise<SmsRequest | null> {
    try {
      return await this.service.updateSmsRequest({
        where: params,
        data: data,
        select: {
          createdAt: true,
          dateCreated: true,
          dateSent: true,
          id: true,
          phone: true,
          sent: true,
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
  @swagger.ApiOkResponse({ type: SmsRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSmsRequest(
    @common.Param() params: SmsRequestWhereUniqueInput
  ): Promise<SmsRequest | null> {
    try {
      return await this.service.deleteSmsRequest({
        where: params,
        select: {
          createdAt: true,
          dateCreated: true,
          dateSent: true,
          id: true,
          phone: true,
          sent: true,
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
