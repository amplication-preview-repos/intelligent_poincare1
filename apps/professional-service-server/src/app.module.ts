import { Module } from "@nestjs/common";
import { AuthTokenModule } from "./authToken/authToken.module";
import { SmsRequestModule } from "./smsRequest/smsRequest.module";
import { AdminUserModule } from "./adminUser/adminUser.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { RegistrationTokenModule } from "./registrationToken/registrationToken.module";
import { AddressModule } from "./address/address.module";
import { UserModule } from "./user/user.module";
import { PaymentStatusModule } from "./paymentStatus/paymentStatus.module";
import { ReviewModule } from "./review/review.module";
import { PaymentModule } from "./payment/payment.module";
import { ServiceTypeModule } from "./serviceType/serviceType.module";
import { PaymentHistoryModule } from "./paymentHistory/paymentHistory.module";
import { ProfessionalAvailabilityModule } from "./professionalAvailability/professionalAvailability.module";
import { ServicePackageModule } from "./servicePackage/servicePackage.module";
import { ProfessionalAvailabiltyExceptionsModule } from "./professionalAvailabiltyExceptions/professionalAvailabiltyExceptions.module";
import { ServiceTimeSlotModule } from "./serviceTimeSlot/serviceTimeSlot.module";
import { ServiceQuoteModule } from "./serviceQuote/serviceQuote.module";
import { ProfessionalPaymentsModule } from "./professionalPayments/professionalPayments.module";
import { DayOfWeekModule } from "./dayOfWeek/dayOfWeek.module";
import { AppointmentStatusModule } from "./appointmentStatus/appointmentStatus.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    AuthTokenModule,
    SmsRequestModule,
    AdminUserModule,
    AppointmentModule,
    RegistrationTokenModule,
    AddressModule,
    UserModule,
    PaymentStatusModule,
    ReviewModule,
    PaymentModule,
    ServiceTypeModule,
    PaymentHistoryModule,
    ProfessionalAvailabilityModule,
    ServicePackageModule,
    ProfessionalAvailabiltyExceptionsModule,
    ServiceTimeSlotModule,
    ServiceQuoteModule,
    ProfessionalPaymentsModule,
    DayOfWeekModule,
    AppointmentStatusModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
