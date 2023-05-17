import { AddressExtraInfoValues } from "../../interfaces/AddressExtraInfo";

const useAddressExtraInfoValues = () => {
  let valuesAddressExtraInfo: AddressExtraInfoValues = {
    residencyType: "",
    residencyTypeOther: "",
    peopleInHouse: "",
    identificationCurp: "",
    identificationPassport: "",
    identificationProof: "",
  };

  return { valuesAddressExtraInfo };
};

export default useAddressExtraInfoValues;
