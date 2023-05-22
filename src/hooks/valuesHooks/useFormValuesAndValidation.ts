import { FormValues } from "../../interfaces/Form";
import useAddressExtraInfoValues from "./useAddressExtraInfoValues";
import useAddressInformationValues from "./useAddressInformationValues";
import useBankAccountInfoValues from "./useBankAccountInfoValues";
import useExtraPersonalInfoValues from "./useExtraPersonalInfoValues";
import useGobernamentalInfoValues from "./useGobernamentalInfoValues";
import usePersonalInformationValues from "./usePersonalInformationValues";
import useSkillsValues from "./useSkillsValues";
import * as Yup from "yup";

const useFormValuesAndValidation = () => {
  const { valuesPersonalInformation } = usePersonalInformationValues();

  const { valuesAddresslInformation } = useAddressInformationValues();

  const { valuesAddressExtraInfo } = useAddressExtraInfoValues();

  const { valuesGobernamentalInfo } = useGobernamentalInfoValues();

  const { valuesExtraPersonalInfo } = useExtraPersonalInfoValues();

  const { valuesBankAccountInfo } = useBankAccountInfoValues();

  const { valuesSkills } = useSkillsValues();
  const valuesForm: FormValues = {
    ...valuesPersonalInformation,
    ...valuesAddresslInformation,
    ...valuesAddressExtraInfo,
    ...valuesGobernamentalInfo,
    ...valuesExtraPersonalInfo,
    ...valuesBankAccountInfo,
    ...valuesSkills,
    agreeWithTerms: false,
  };

  const validationSchema = Yup.object({
    // Personal Info
    name: Yup.string().required("Name is required"),
    paternal_last_name: Yup.string().required("Paternal last name is required"),
    gender: Yup.string().required("Gender is required"),
    city_birth: Yup.string().required("City of birth is required"),
    state_birth: Yup.string().required("State of birth is required"),
    country: Yup.string().required("Country is required"),

    // Address Info
    street: Yup.string().required("Street is required"),
    streetA: Yup.string().required("StreetA is required"),
    colony: Yup.string().required("Colony is required"),
    addressProof: Yup.string().test(
      "fileFormat",
      "Unsupported file format",
      (value) => {
        if (!value) return true; // Skip validation if no file is selected

        const supportedFormats = ["pdf", "png", "jpeg", "jpg"];
        const fileExtension = value.split(".").pop()?.toLowerCase();
        return supportedFormats.includes(fileExtension!);
      }
    ),
    // Gobernamental info
    identificationCurp: Yup.string().matches(
      /^[A-Z0-9]{18}$/,
      "This is not a valid CURP document"
    ),
    identificationPassport: Yup.string().matches(
      /^[A-Z0-9]{6,9}$/,
      "This is not a valid passport document"
    ),

    identificationProof: Yup.string().test(
      "fileFormat",
      "Unsupported file format",
      (value) => {
        if (!value) return true; // Skip validation if no file is selected

        const supportedFormats = ["pdf", "png", "jpeg", "jpg"];
        const fileExtension = value.split(".").pop()?.toLowerCase();
        return supportedFormats.includes(fileExtension!);
      }
    ),
    // Extra personal info
    email: Yup.string().email("This is not an email"),
    altEmail: Yup.string().email("This is not an email"),
    phone: Yup.string().matches(/^\d{1,2} \d{10}$/, "Invalid phone number"),
    proofOfDegree: Yup.string().test(
      "fileFormat",
      "Unsupported file format",
      (value) => {
        if (!value) return true; // Skip validation if no file is selected

        const supportedFormats = ["pdf", "png", "jpeg", "jpg"];
        const fileExtension = value.split(".").pop()?.toLowerCase();
        return supportedFormats.includes(fileExtension!);
      }
    ),
    proofOfLicense: Yup.string().test(
      "fileFormat",
      "Unsupported file format",
      (value) => {
        if (!value) return true; // Skip validation if no file is selected

        const supportedFormats = ["pdf", "png", "jpeg", "jpg"];
        const fileExtension = value.split(".").pop()?.toLowerCase();
        return supportedFormats.includes(fileExtension!);
      }
    ),

    // Bank account info
    accountNumber: Yup.string().matches(
      /^[A-Z0-9]+$/,
      "This is not a valid account number"
    ),

    CLABE: Yup.string().matches(/^\d{18}$/, "This is not a valid CLABE"),

    agreeWithTerms: Yup.boolean().oneOf([true]),
  });

  return { valuesForm, validationSchema };
};
export default useFormValuesAndValidation;
