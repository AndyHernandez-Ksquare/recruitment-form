import { AddressExtraInfoValues } from "../interfaces/AddressExtraInfo";

const useAddressExtraInfoValidation = () => {
  let valuesAddressExtraInfo: AddressExtraInfoValues = {
    residencyType: "",
    residencyTypeOther: "",
    peopleInHouse: "",
    identification: "",
    identificationProof: "",
  };

  return { valuesAddressExtraInfo };
};

export default useAddressExtraInfoValidation;
