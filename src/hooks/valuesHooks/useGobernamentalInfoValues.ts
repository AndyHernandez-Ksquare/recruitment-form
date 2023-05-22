import { GobernamentalInfoValues } from "../../interfaces/GobernamentalInfo";

const useGobernamentalInfoValues = () => {
  let valuesGobernamentalInfo: GobernamentalInfoValues = {
    identificationCurp: "",
    identificationPassport: "",
    identificationProof: "",
  };

  return { valuesGobernamentalInfo };
};

export default useGobernamentalInfoValues;
