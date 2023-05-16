import { ExtraPersonalInfoValues } from "../../interfaces/ExtraPersonalInfo";

const useExtraPersonalInfoValues = () => {
  let valuesExtraPersonalInfo: ExtraPersonalInfoValues = {
    phone: "",
    email: "",
    altEmail: "",
    howDiscoveredUs: "",
    howDiscoveredUsOther: "",
    mostLikeSD: "",
    highestDegree: "",
    highestDegreeOther: "",
    universityName: "",
    universityCity: "",
    universityState: "",
    universityCountry: "",
    nameOfDegree: "",
    finishedDegree: "",
    proofOfDegree: "",
    proffesionalLicense: "",
    proofOfLicense: "",
    scholarship: "",
    scholarshipLevel: "",
    scholarshipKind: "",
    scholarshipDuration: 0,
  };

  return { valuesExtraPersonalInfo };
};

export default useExtraPersonalInfoValues;
