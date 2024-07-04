import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AuthTokenList } from "./authToken/AuthTokenList";
import { AuthTokenCreate } from "./authToken/AuthTokenCreate";
import { AuthTokenEdit } from "./authToken/AuthTokenEdit";
import { AuthTokenShow } from "./authToken/AuthTokenShow";
import { SmsRequestList } from "./smsRequest/SmsRequestList";
import { SmsRequestCreate } from "./smsRequest/SmsRequestCreate";
import { SmsRequestEdit } from "./smsRequest/SmsRequestEdit";
import { SmsRequestShow } from "./smsRequest/SmsRequestShow";
import { AdminUserList } from "./adminUser/AdminUserList";
import { AdminUserCreate } from "./adminUser/AdminUserCreate";
import { AdminUserEdit } from "./adminUser/AdminUserEdit";
import { AdminUserShow } from "./adminUser/AdminUserShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
import { RegistrationTokenList } from "./registrationToken/RegistrationTokenList";
import { RegistrationTokenCreate } from "./registrationToken/RegistrationTokenCreate";
import { RegistrationTokenEdit } from "./registrationToken/RegistrationTokenEdit";
import { RegistrationTokenShow } from "./registrationToken/RegistrationTokenShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { PaymentStatusList } from "./paymentStatus/PaymentStatusList";
import { PaymentStatusCreate } from "./paymentStatus/PaymentStatusCreate";
import { PaymentStatusEdit } from "./paymentStatus/PaymentStatusEdit";
import { PaymentStatusShow } from "./paymentStatus/PaymentStatusShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { ServiceTypeList } from "./serviceType/ServiceTypeList";
import { ServiceTypeCreate } from "./serviceType/ServiceTypeCreate";
import { ServiceTypeEdit } from "./serviceType/ServiceTypeEdit";
import { ServiceTypeShow } from "./serviceType/ServiceTypeShow";
import { PaymentHistoryList } from "./paymentHistory/PaymentHistoryList";
import { PaymentHistoryCreate } from "./paymentHistory/PaymentHistoryCreate";
import { PaymentHistoryEdit } from "./paymentHistory/PaymentHistoryEdit";
import { PaymentHistoryShow } from "./paymentHistory/PaymentHistoryShow";
import { ProfessionalAvailabilityList } from "./professionalAvailability/ProfessionalAvailabilityList";
import { ProfessionalAvailabilityCreate } from "./professionalAvailability/ProfessionalAvailabilityCreate";
import { ProfessionalAvailabilityEdit } from "./professionalAvailability/ProfessionalAvailabilityEdit";
import { ProfessionalAvailabilityShow } from "./professionalAvailability/ProfessionalAvailabilityShow";
import { ServicePackageList } from "./servicePackage/ServicePackageList";
import { ServicePackageCreate } from "./servicePackage/ServicePackageCreate";
import { ServicePackageEdit } from "./servicePackage/ServicePackageEdit";
import { ServicePackageShow } from "./servicePackage/ServicePackageShow";
import { ProfessionalAvailabiltyExceptionsList } from "./professionalAvailabiltyExceptions/ProfessionalAvailabiltyExceptionsList";
import { ProfessionalAvailabiltyExceptionsCreate } from "./professionalAvailabiltyExceptions/ProfessionalAvailabiltyExceptionsCreate";
import { ProfessionalAvailabiltyExceptionsEdit } from "./professionalAvailabiltyExceptions/ProfessionalAvailabiltyExceptionsEdit";
import { ProfessionalAvailabiltyExceptionsShow } from "./professionalAvailabiltyExceptions/ProfessionalAvailabiltyExceptionsShow";
import { ServiceTimeSlotList } from "./serviceTimeSlot/ServiceTimeSlotList";
import { ServiceTimeSlotCreate } from "./serviceTimeSlot/ServiceTimeSlotCreate";
import { ServiceTimeSlotEdit } from "./serviceTimeSlot/ServiceTimeSlotEdit";
import { ServiceTimeSlotShow } from "./serviceTimeSlot/ServiceTimeSlotShow";
import { ServiceQuoteList } from "./serviceQuote/ServiceQuoteList";
import { ServiceQuoteCreate } from "./serviceQuote/ServiceQuoteCreate";
import { ServiceQuoteEdit } from "./serviceQuote/ServiceQuoteEdit";
import { ServiceQuoteShow } from "./serviceQuote/ServiceQuoteShow";
import { ProfessionalPaymentsList } from "./professionalPayments/ProfessionalPaymentsList";
import { ProfessionalPaymentsCreate } from "./professionalPayments/ProfessionalPaymentsCreate";
import { ProfessionalPaymentsEdit } from "./professionalPayments/ProfessionalPaymentsEdit";
import { ProfessionalPaymentsShow } from "./professionalPayments/ProfessionalPaymentsShow";
import { DayOfWeekList } from "./dayOfWeek/DayOfWeekList";
import { DayOfWeekCreate } from "./dayOfWeek/DayOfWeekCreate";
import { DayOfWeekEdit } from "./dayOfWeek/DayOfWeekEdit";
import { DayOfWeekShow } from "./dayOfWeek/DayOfWeekShow";
import { AppointmentStatusList } from "./appointmentStatus/AppointmentStatusList";
import { AppointmentStatusCreate } from "./appointmentStatus/AppointmentStatusCreate";
import { AppointmentStatusEdit } from "./appointmentStatus/AppointmentStatusEdit";
import { AppointmentStatusShow } from "./appointmentStatus/AppointmentStatusShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ProfessionalService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AuthToken"
          list={AuthTokenList}
          edit={AuthTokenEdit}
          create={AuthTokenCreate}
          show={AuthTokenShow}
        />
        <Resource
          name="SmsRequest"
          list={SmsRequestList}
          edit={SmsRequestEdit}
          create={SmsRequestCreate}
          show={SmsRequestShow}
        />
        <Resource
          name="AdminUser"
          list={AdminUserList}
          edit={AdminUserEdit}
          create={AdminUserCreate}
          show={AdminUserShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
        />
        <Resource
          name="RegistrationToken"
          list={RegistrationTokenList}
          edit={RegistrationTokenEdit}
          create={RegistrationTokenCreate}
          show={RegistrationTokenShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="PaymentStatus"
          list={PaymentStatusList}
          edit={PaymentStatusEdit}
          create={PaymentStatusCreate}
          show={PaymentStatusShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="ServiceType"
          list={ServiceTypeList}
          edit={ServiceTypeEdit}
          create={ServiceTypeCreate}
          show={ServiceTypeShow}
        />
        <Resource
          name="PaymentHistory"
          list={PaymentHistoryList}
          edit={PaymentHistoryEdit}
          create={PaymentHistoryCreate}
          show={PaymentHistoryShow}
        />
        <Resource
          name="ProfessionalAvailability"
          list={ProfessionalAvailabilityList}
          edit={ProfessionalAvailabilityEdit}
          create={ProfessionalAvailabilityCreate}
          show={ProfessionalAvailabilityShow}
        />
        <Resource
          name="ServicePackage"
          list={ServicePackageList}
          edit={ServicePackageEdit}
          create={ServicePackageCreate}
          show={ServicePackageShow}
        />
        <Resource
          name="ProfessionalAvailabiltyExceptions"
          list={ProfessionalAvailabiltyExceptionsList}
          edit={ProfessionalAvailabiltyExceptionsEdit}
          create={ProfessionalAvailabiltyExceptionsCreate}
          show={ProfessionalAvailabiltyExceptionsShow}
        />
        <Resource
          name="ServiceTimeSlot"
          list={ServiceTimeSlotList}
          edit={ServiceTimeSlotEdit}
          create={ServiceTimeSlotCreate}
          show={ServiceTimeSlotShow}
        />
        <Resource
          name="ServiceQuote"
          list={ServiceQuoteList}
          edit={ServiceQuoteEdit}
          create={ServiceQuoteCreate}
          show={ServiceQuoteShow}
        />
        <Resource
          name="ProfessionalPayments"
          list={ProfessionalPaymentsList}
          edit={ProfessionalPaymentsEdit}
          create={ProfessionalPaymentsCreate}
          show={ProfessionalPaymentsShow}
        />
        <Resource
          name="DayOfWeek"
          list={DayOfWeekList}
          edit={DayOfWeekEdit}
          create={DayOfWeekCreate}
          show={DayOfWeekShow}
        />
        <Resource
          name="AppointmentStatus"
          list={AppointmentStatusList}
          edit={AppointmentStatusEdit}
          create={AppointmentStatusCreate}
          show={AppointmentStatusShow}
        />
      </Admin>
    </div>
  );
};

export default App;
