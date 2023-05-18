import { AddressExtraInfoValues } from "./AddressExtraInfo";
import { AddressInformationValues } from "./AddressInformation";
import { BankAccountInfoValues } from "./BankAccountInfo";
import { ExtraPersonalInfoValues } from "./ExtraPersonalInfo";
import { GobernamentalInfoValues } from "./GobernamentalInfo";
import { PersonalInformationValues } from "./PersonalInformation";
import { SkillsValues } from "./Skills";

export type FormValues = PersonalInformationValues &
  AddressInformationValues &
  AddressExtraInfoValues &
  GobernamentalInfoValues &
  ExtraPersonalInfoValues &
  BankAccountInfoValues &
  SkillsValues &
  AgreeWithTerms;

interface AgreeWithTerms {
  agreeWithTerms: boolean;
}
