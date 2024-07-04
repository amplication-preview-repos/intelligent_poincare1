import * as graphql from "@nestjs/graphql";
import { AppointmentStatusResolverBase } from "./base/appointmentStatus.resolver.base";
import { AppointmentStatus } from "./base/AppointmentStatus";
import { AppointmentStatusService } from "./appointmentStatus.service";

@graphql.Resolver(() => AppointmentStatus)
export class AppointmentStatusResolver extends AppointmentStatusResolverBase {
  constructor(protected readonly service: AppointmentStatusService) {
    super(service);
  }
}
