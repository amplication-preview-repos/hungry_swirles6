import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CafeService } from "./cafe.service";
import { CafeControllerBase } from "./base/cafe.controller.base";

@swagger.ApiTags("cafes")
@common.Controller("cafes")
export class CafeController extends CafeControllerBase {
  constructor(protected readonly service: CafeService) {
    super(service);
  }
}
