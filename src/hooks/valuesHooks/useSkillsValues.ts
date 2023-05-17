import { SkillsValues } from "../../interfaces/Skills";
const useSkillsValues = () => {
  let valuesSkills: SkillsValues = {
    knowProgrammingLanguage: "",
    amountOfExperience: "",
    disabilities: "",
  };

  return { valuesSkills };
};
export default useSkillsValues;
