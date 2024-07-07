import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CafeServiceBase } from "./base/cafe.service.base";

@Injectable()
export class CafeService extends CafeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
