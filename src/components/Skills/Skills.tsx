import React from "react";
import { SkillsProps } from "../../interfaces/Skills";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const Skills = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
}: SkillsProps) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 1, marginTop: -30 }}
    >
      <TextField
        sx={{ width: 400 }}
        id="knowProgrammingLanguage"
        name="knowProgrammingLanguage"
        label="Do you know a programming language? list them"
        value={values.knowProgrammingLanguage}
        onChange={handleChange}
      />

      <FormControl fullWidth>
        <InputLabel id="amountOfExperience_label">
          Amount of experience
        </InputLabel>
        <Select
          labelId="amountOfExperience_label"
          id="amountOfExperience_select"
          name="amountOfExperience"
          value={values.amountOfExperience}
          label="Amount of experience"
          onChange={handleChange}
        >
          <MenuItem value="Less_than_3_months">Less than 3 months</MenuItem>
          <MenuItem value="3_to_6_months">3 to 6 months</MenuItem>
          <MenuItem value="More_than_12_months">More than 12 months</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="disabilities_label">
          Do you have any disability?
        </InputLabel>
        <Select
          labelId="disabilities_label"
          id="disabilities_select"
          name="disabilities"
          value={values.disabilities}
          label="Do you have any disability?"
          onChange={handleChange}
        >
          <MenuItem value="Motor_skills">Motor skills</MenuItem>
          <MenuItem value="Auditory_disability">Auditory disability</MenuItem>
          <MenuItem value="Visual_impairment">Visual Impairment</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );

};
