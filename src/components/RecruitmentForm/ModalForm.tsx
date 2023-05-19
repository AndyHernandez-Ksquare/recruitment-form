import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FormValues } from "../../interfaces/Form";

interface ModalFormProps {
  formValues?: FormValues;
}

const ModalForm = ({ formValues }: ModalFormProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // The filledFieldCount is used to calculate the marginTop that is being used for the Modal
  const [filledFieldCount, setFilledFieldCount] = useState<number>(0);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const renderField = (label: string, value?: string | number | boolean) => {
    if (!value || value === "") {
      return null;
    }

    return (
      <Box sx={{ textAlign: "left", width: "80%" }}>
        <Typography sx={{ fontWeight: 600 }} variant="body1" component="span">
          {label}:
        </Typography>
        <Typography variant="body2" component="span" sx={{ ml: 1 }}>
          {value}
        </Typography>
      </Box>
    );
  };

  useEffect(() => {
    // Count the number of filled fields
    let count = 0;
    if (formValues) {
      Object.values(formValues).forEach((value) => {
        if (value && value !== "") {
          count++;
        }
      });
    }
    setFilledFieldCount(count);
  }, [formValues]);

  return (
    <Box>
      <Button disabled={formValues ? false : true} onClick={handleOpen}>
        {isOpen ? "MODAL OPENED" : "OPEN MODAL"}
      </Button>
      <Modal
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          width: "100vw",
          overflow: "auto", // Enable scrolling
        }}
        open={isOpen}
        onClose={handleClose}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "black",
            minWidth: 800,
            minHeight: 500,
            padding: 4,
            color: "white",
            overflow: "auto", // Enable scrolling
            marginTop: 0.8 * filledFieldCount,
          }}
        >
          {renderField("Name", formValues?.name)}
          {renderField("Paternal Last Name", formValues?.paternal_last_name)}
          {renderField("Maternal Last Name", formValues?.maternal_last_name)}
          {renderField("Gender", formValues?.gender)}
          {renderField("Preferred Gender", formValues?.preferred_gender)}
          {renderField(
            "Date of Birth",
            formValues?.date_of_birth?.format("YYYY-MM-DD")
          )}
          {renderField("City of Birth", formValues?.city_birth)}
          {renderField("State of Birth", formValues?.state_birth)}
          {renderField("Country", formValues?.country)}
          {renderField("Street", formValues?.street)}
          {renderField("Street A", formValues?.streetA)}
          {renderField("Street B", formValues?.streetB)}
          {renderField("Colony", formValues?.colony)}
          {renderField("Current City", formValues?.city_current)}
          {renderField("Current State", formValues?.state_current)}
          {renderField("Postal Code", formValues?.postalCode)}
          {renderField("Address Proof", formValues?.addressProof)}
          {renderField("Residency Type", formValues?.residencyType)}
          {renderField("Other Residency Type", formValues?.residencyTypeOther)}
          {renderField("People in House", formValues?.peopleInHouse)}
          {renderField("Identification CURP", formValues?.identificationCurp)}
          {renderField(
            "Identification Passport",
            formValues?.identificationPassport
          )}
          {renderField("Identification Proof", formValues?.identificationProof)}
          {renderField("Phone", formValues?.phone)}
          {renderField("Email", formValues?.email)}
          {renderField("Alternate Email", formValues?.altEmail)}
          {renderField("How Discovered Us", formValues?.howDiscoveredUs)}
          {renderField(
            "Other How Discovered Us",
            formValues?.howDiscoveredUsOther
          )}
          {renderField("Most Like SD", formValues?.mostLikeSD)}
          {renderField("Highest Degree", formValues?.highestDegree)}
          {renderField("Other Highest Degree", formValues?.highestDegreeOther)}
          {renderField("University Name", formValues?.universityName)}
          {renderField("University City", formValues?.universityCity)}
          {renderField("University State", formValues?.universityState)}
          {renderField("University Country", formValues?.universityCountry)}
          {renderField("Name of Degree", formValues?.nameOfDegree)}
          {renderField("Finished Degree", formValues?.finishedDegree)}
          {renderField("Proof of Degree", formValues?.proofOfDegree)}
          {renderField("Professional License", formValues?.proffesionalLicense)}
          {renderField("Proof of License", formValues?.proofOfLicense)}
          {renderField("Scholarship", formValues?.scholarship)}
          {renderField("Scholarship Level", formValues?.scholarshipLevel)}
          {renderField("Scholarship Kind", formValues?.scholarshipKind)}
          {renderField(
            "Scholarship Duration",
            formValues?.scholarshipDuration?.toString()
          )}
          {renderField("Account Number", formValues?.accountNumber)}
          {renderField("CLABE", formValues?.CLABE)}
          {renderField("Bank", formValues?.bank)}
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalForm;
