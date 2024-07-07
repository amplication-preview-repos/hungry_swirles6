import { Module } from "@nestjs/common";
import { CafeModuleBase } from "./base/cafe.module.base";
import { CafeService } from "./cafe.service";
import { CafeController } from "./cafe.controller";
import { CafeResolver } from "./cafe.resolver";

@Module({
  imports: [CafeModuleBase],
  controllers: [CafeController],
  providers: [CafeService, CafeResolver],
  exports: [CafeService],
})
export class CafeModule {}
