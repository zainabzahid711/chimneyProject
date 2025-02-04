import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

//herosection margin is compulsory
export const TextArea = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  textAlign: "center",
});

export const BtnDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 40,
  gap: 20,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

//latest creation padding is compulssory
export const TextCenter = styled(Box)({
  padding: "0px 0px 60px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

export const CreationItems = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTop: "1px solid #8B8B8B4D",
  boxSizing: "border-box",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const CreationPerItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  borderLeft: "1px solid #8B8B8B4D",
  boxSizing: "border-box",
  padding: "20px 50px 70px 50px",
  width: "calc(100% / 3)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    border: "none",
    borderBottom: "1px solid #8B8B8B4D",
  },
}));

//storageSection
//decentrilizaiton

export const TextLeft = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const StorageData = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "30px",
  },
}));

export const StorageContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
}));

//earning growthh section

export const IconsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  marginTop: "30px",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
    gap: "50px",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    gap: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "12px",
  },
}));

export const PericonRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
  textAlign: "center",
  gap: "10px",
}));

export const DstorageItems = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "30px",
}));

export const DstoragePerItem = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gap: "30px",
    flexDirection: "column",
  },
}));

export const Dstorage = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

//decentrilzation

export const DecentralizationSec = styled(Box)(({ theme }) => ({
  background: theme.palette.custom.DecentralizationSec,
  padding: "100px 20px 40px 100px",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    padding: "70px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "100px 10px 40px 50px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Resources = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const ResourcesPerItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const SourceItemTitle = styled(Box)(({ theme }) => ({
  marginTop: "30px",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "10px",
}));

//-------faq's--------

export const UserQuestions = styled(Box)(({ theme }) => ({
  padding: "80px",
  [theme.breakpoints.down("lg")]: {
    padding: "70px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "45px",
  },
}));

export const Network = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 40,
  gap: 20,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const PerNetwork = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 30,
  gap: 20,
  background: "#f1f1f1",
  color: "black",
  padding: "30px",
  width: "313px",
  maxWidth: "100%",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
    padding: "15px",
    width: "210px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "313px",
  },
}));

// ----------faq questions-----------

export const Questions = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "646px",
  maxWidth: "100%",
  marginTop: 40,
  gap: 20,
}));

export const PerQuestionAns = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 20,
  gap: 10,
}));

export const AnsDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "10px",
  gap: 10,
  color: "#666666",
}));

export const QsDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderTop: "1px solid #8B8B8B4D",
  padding: "10px",
  gap: 10,
  cursor: "pointer",
}));
