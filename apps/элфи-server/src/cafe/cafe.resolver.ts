import * as graphql from "@nestjs/graphql";
import { CafeResolverBase } from "./base/cafe.resolver.base";
import { Cafe } from "./base/Cafe";
import { CafeService } from "./cafe.service";

@graphql.Resolver(() => Cafe)
export class CafeResolver extends CafeResolverBase {
  constructor(protected readonly service: CafeService) {
    super(service);
  }
}
