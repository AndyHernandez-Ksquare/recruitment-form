import { BankAccountInfoValues } from "../interfaces/BankAccountInfo";
const useBankAccountInfoValues = () => {
  let valuesBankAccountInfo: BankAccountInfoValues = {
    accountNumber: "",
    CLABE: "",
    bank: "",
  };

  return { valuesBankAccountInfo };
};
export default useBankAccountInfoValues;
