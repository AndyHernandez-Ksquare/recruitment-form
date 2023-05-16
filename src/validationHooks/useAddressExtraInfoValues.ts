import { AddressExtraInfoValues } from "../interfaces/AddressExtraInfo";

const useAddressExtraInfoValues = () => {
  let valuesAddressExtraInfo: AddressExtraInfoValues = {
    residencyType: "",
    residencyTypeOther: "",
    peopleInHouse: "",
    identification: "",
    identificationProof: "",
  };

  return { valuesAddressExtraInfo };
};

export default useAddressExtraInfoValues;
