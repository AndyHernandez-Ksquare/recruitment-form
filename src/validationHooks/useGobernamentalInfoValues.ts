import { GobernamentalInfoValues } from "../interfaces/GobernamentalInfo";

const useGobernamentalInfoValues = () => {
  let valuesAddressExtraInfo: GobernamentalInfoValues = {
    identificationCurp: "",
    identificationPassport: "",
    identificationProof: "",
  };

  return { valuesAddressExtraInfo };
};

export default useGobernamentalInfoValues;
