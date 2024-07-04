import * as graphql from "@nestjs/graphql";
import { DayOfWeekResolverBase } from "./base/dayOfWeek.resolver.base";
import { DayOfWeek } from "./base/DayOfWeek";
import { DayOfWeekService } from "./dayOfWeek.service";

@graphql.Resolver(() => DayOfWeek)
export class DayOfWeekResolver extends DayOfWeekResolverBase {
  constructor(protected readonly service: DayOfWeekService) {
    super(service);
  }
}
