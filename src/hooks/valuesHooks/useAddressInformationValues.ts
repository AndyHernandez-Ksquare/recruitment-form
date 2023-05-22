import { AddressInformationValues } from "../../interfaces/AddressInformation";

const useAddressInformationValues = () => {
  let valuesAddresslInformation: AddressInformationValues = {
    street: "",
    streetA: "",
    streetB: "",
    colony: "",
    city_current: "",
    state_current: "",
    postalCode: "",
    addressProof: "",
  };

  return { valuesAddresslInformation };
};
export default useAddressInformationValues;
