import React, { ChangeEvent } from "react";
import { ExtraPersonalInfoProps } from "../../interfaces/ExtraPersonalInfo";
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";

export const ExtraPersonalInfo = ({
  errors,
  touched,
  values,
  handleChange,
  handleBlur,
  setFieldValue,
  setFieldTouched,
}: ExtraPersonalInfoProps) => {
  return (
    <Box
      sx={{
        width: 800,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <TextField
        label="Phone number"
        placeholder="ex: 32 7353853746"
        type="tel"
        id="phone"
        name="phone"
        value={values.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.phone && Boolean(errors.phone)}
        helperText={touched.phone && errors.phone}
      />
      <TextField
        label="Email"
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <TextField
        label="Alt Email"
        type="altEmail"
        id="altEmail"
        name="altEmail"
        value={values.altEmail}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.altEmail && Boolean(errors.altEmail)}
        helperText={touched.altEmail && errors.altEmail}
      />
      <FormControl fullWidth sx={{ display: "flex", gap: 1 }}>
        <InputLabel id="howDiscoveredUs_label">
          How did you find about us?
        </InputLabel>
        <Select
          labelId="howDiscoveredUs_label"
          id="howDiscoveredUs_select"
          name="howDiscoveredUs"
          value={values.howDiscoveredUs}
          onChange={handleChange}
        >
          <MenuItem value="Recommendation">Recommendation</MenuItem>
          <MenuItem value="Facebook">Facebook</MenuItem>
          <MenuItem value="Instagram">Instagram</MenuItem>
          <MenuItem value="My_university">My university</MenuItem>
          <MenuItem value="Google">Google</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        {values.howDiscoveredUs === "Other" && (
          <TextField
            id="howDiscoveredUsOther"
            name="howDiscoveredUsOther"
            label="Describe how you found us"
            value={values.howDiscoveredUsOther}
            onChange={handleChange}
          ></TextField>
        )}
      </FormControl>
      <FormControl sx={{ width: 500 }}>
        <InputLabel htmlFor="mostLikeSD">
          What do you like the most about Software Development?
        </InputLabel>
        <TextareaAutosize
          name="mostLikeSD"
          id="mostLikeSD"
          value={values.mostLikeSD}
          onChange={handleChange}
          maxLength={100}
          minRows={10}
        ></TextareaAutosize>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="highestDegree_label">
          What is your highest degree of studies?
        </InputLabel>
        <Select
          labelId="highestDegree_label"
          id="highestDegree_select"
          name="highestDegree"
          value={values.highestDegree}
          onChange={handleChange}
        >
          <MenuItem value="Highschool_or_equivalent">
            Highschool or equivalent
          </MenuItem>
          <MenuItem value="Incomplete_degree_or_in_progress">
            Incomplete degree or in progress
          </MenuItem>
          <MenuItem value="University_degree">University degree</MenuItem>
          <MenuItem value="Incomplete_masters_or_in_progress">
            Incomplete masters or in progress
          </MenuItem>
          <MenuItem value="Masters_degree">Masters degree</MenuItem>
          <MenuItem value="Incomplete_PHD_or_in_progress">
            Incomplete PHD or in progress
          </MenuItem>
          <MenuItem value="PHD">PHD</MenuItem>
          <MenuItem value="No_formal_education">No formal education</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>

        {values.highestDegree === "No_formal_education" ||
        values.highestDegree === "Other" ? (
          <TextField
            id="highestDegreeOther"
            name="highestDegreeOther"
            label="Describe your level of education"
            value={values.highestDegreeOther}
            onChange={handleChange}
          ></TextField>
        ) : null}
      </FormControl>
      {values.highestDegree === "Incomplete_degree_or_in_progress" ||
      values.highestDegree === "University_degree" ||
      values.highestDegree === "Incomplete_masters_or_in_progress" ||
      values.highestDegree === "Masters_degree" ||
      values.highestDegree === "Incomplete_PHD_or_in_progress" ||
      values.highestDegree === "PHD" ? (
        <FormControl sx={{ display: "flex", gap: 1 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              id="universityName"
              name="universityName"
              label="Name of University"
              value={values.universityName}
              onChange={handleChange}
            ></TextField>
            <TextField
              id="universityCity"
              name="universityCity"
              label="City of University"
              value={values.universityCity}
              onChange={handleChange}
            ></TextField>
            <TextField
              id="universityState"
              name="universityState"
              label="State of University"
              value={values.universityState}
              onChange={handleChange}
            ></TextField>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              id="universityCountry"
              name="universityCountry"
              label="Country of University"
              value={values.universityCountry}
              onChange={handleChange}
            ></TextField>
            <TextField
              id="nameOfDegree"
              name="nameOfDegree"
              label="Name of Your Degree"
              value={values.nameOfDegree}
              onChange={handleChange}
            ></TextField>
          </Box>
          <FormControl sx={{ width: 250, marginTop: 1 }}>
            <InputLabel id="finishedDegree_label">
              Did you finish your degree?
            </InputLabel>
            <Select
              labelId="finishedDegree_label"
              id="finishedDegree_select"
              name="finishedDegree"
              value={values.finishedDegree}
              onChange={handleChange}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>

            {values.finishedDegree === "yes" && (
              <Box>
                <FormControl>
                  <Input
                    type="file"
                    id="proofOfDegree"
                    name="proofOfDegree"
                    style={{ display: "none" }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setFieldTouched("proofOfDegree", true);
                      setFieldValue(
                        "proofOfDegree",
                        event.currentTarget.files![0].name
                      );
                    }}
                    error={
                      touched.proofOfDegree && Boolean(errors.proofOfDegree)
                    }
                  />
                </FormControl>
                <InputLabel htmlFor="proofOfDegree">
                  <Button
                    sx={{
                      minWidth: 200,
                      backgroundColor:
                        touched.proofOfDegree && errors.proofOfDegree
                          ? "red"
                          : "none",
                    }}
                    variant="contained"
                    component="span"
                  >
                    {touched.proofOfDegree && errors.proofOfDegree
                      ? errors.proofOfDegree
                      : values.proofOfDegree
                      ? "File uploaded!"
                      : "Upload Proof of Degree"}
                  </Button>
                </InputLabel>
              </Box>
            )}
          </FormControl>
          <FormControl>
            <InputLabel id="proffesionalLicense_label">
              Do you have your license?
            </InputLabel>
            <Select
              labelId="proffesionalLicense_label"
              id="proffesionalLicense_select"
              name="proffesionalLicense"
              value={values.proffesionalLicense}
              onChange={handleChange}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
            {values.proffesionalLicense === "yes" && (
              <Box>
                <FormControl>
                  <Input
                    type="file"
                    id="proofOfLicense"
                    name="proofOfLicense"
                    style={{ display: "none" }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setFieldTouched("proofOfLicense", true);
                      setFieldValue(
                        "proofOfLicense",
                        event.currentTarget.files![0].name
                      );
                    }}
                    error={
                      touched.proofOfLicense && Boolean(errors.proofOfLicense)
                    }
                  />
                </FormControl>
                <InputLabel htmlFor="proofOfLicense">
                  <Button
                    sx={{
                      minWidth: 200,
                      backgroundColor:
                        touched.proofOfLicense && errors.proofOfLicense
                          ? "red"
                          : "none",
                    }}
                    variant="contained"
                    component="span"
                  >
                    {touched.proofOfLicense && errors.proofOfLicense
                      ? errors.proofOfLicense
                      : values.proofOfLicense
                      ? "File uploaded!"
                      : "Upload Proof of License"}
                  </Button>
                </InputLabel>
              </Box>
            )}
          </FormControl>

          <FormControl>
            <InputLabel id="scholarship_label">
              Did you have an scholarship?
            </InputLabel>
            <Select
              labelId="scholarship_label"
              id="scholarship_select"
              name="scholarship"
              value={values.scholarship}
              onChange={handleChange}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>

            {values.scholarship === "yes" && (
              <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="scholarshipLevel_label">
                    Scholarship level
                  </InputLabel>
                  <Select
                    labelId="scholarshipLevel_label"
                    id="scholarshipLevel_select"
                    name="scholarshipLevel"
                    value={values.scholarshipLevel}
                    onChange={handleChange}
                  >
                    <MenuItem value="Highschool">Highschool</MenuItem>
                    <MenuItem value="University">University</MenuItem>
                    <MenuItem value="Masters">Masters</MenuItem>
                    <MenuItem value="PHD">PHD</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="scholarshipKind_label">
                    Kind of scholarship
                  </InputLabel>
                  <Select
                    labelId="scholarshipKind_label"
                    id="scholarshipKind_select"
                    name="scholarshipKind"
                    value={values.scholarshipKind}
                    onChange={handleChange}
                  >
                    <MenuItem value="Academics">Academics</MenuItem>
                    <MenuItem value="Sports">Sports</MenuItem>
                    <MenuItem value="Goverment_backed">
                      Goverment-backed
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel htmlFor="scholarshipDuration_label">
                    scholarship Duration
                  </InputLabel>
                  <Input
                    id="scholarshipDuration_label"
                    name="scholarshipDuration"
                    type="number"
                    inputProps={{ max: 6, min: 0 }}
                    value={values.scholarshipDuration}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            )}
          </FormControl>
        </FormControl>
      ) : null}
    </Box>
  );
};
