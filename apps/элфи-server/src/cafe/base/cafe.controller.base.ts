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
import { CafeService } from "../cafe.service";
import { CafeCreateInput } from "./CafeCreateInput";
import { Cafe } from "./Cafe";
import { CafeFindManyArgs } from "./CafeFindManyArgs";
import { CafeWhereUniqueInput } from "./CafeWhereUniqueInput";
import { CafeUpdateInput } from "./CafeUpdateInput";

export class CafeControllerBase {
  constructor(protected readonly service: CafeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Cafe })
  async createCafe(@common.Body() data: CafeCreateInput): Promise<Cafe> {
    return await this.service.createCafe({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Cafe] })
  @ApiNestedQuery(CafeFindManyArgs)
  async cafes(@common.Req() request: Request): Promise<Cafe[]> {
    const args = plainToClass(CafeFindManyArgs, request.query);
    return this.service.cafes({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Cafe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async cafe(
    @common.Param() params: CafeWhereUniqueInput
  ): Promise<Cafe | null> {
    const result = await this.service.cafe({
      where: params,
      select: {
        id: true,
        createdAt: true,
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
  @swagger.ApiOkResponse({ type: Cafe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCafe(
    @common.Param() params: CafeWhereUniqueInput,
    @common.Body() data: CafeUpdateInput
  ): Promise<Cafe | null> {
    try {
      return await this.service.updateCafe({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
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
  @swagger.ApiOkResponse({ type: Cafe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCafe(
    @common.Param() params: CafeWhereUniqueInput
  ): Promise<Cafe | null> {
    try {
      return await this.service.deleteCafe({
        where: params,
        select: {
          id: true,
          createdAt: true,
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
