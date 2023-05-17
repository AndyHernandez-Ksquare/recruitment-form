import { PersonalInformationValues } from "../../interfaces/PersonalInformation";
import dayjs from "dayjs";

const usePersonalInformationValues = () => {
  let valuesPersonalInformation: PersonalInformationValues = {
    name: "",
    paternal_last_name: "",
    maternal_last_name: "",
    gender: "",
    preferred_gender: "",
    date_of_birth: dayjs(),
    city_birth: "",
    state_birth: "",
    country: "",
  };

  return { valuesPersonalInformation };
};
export default usePersonalInformationValues;
