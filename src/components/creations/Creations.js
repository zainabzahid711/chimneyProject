import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import absPrivacy from "../../assets/svg/absPrivacy.svg";
import serverSec from "../../assets/svg/serverSecurity.svg";
import highSpeed from "../../assets/svg/highSpeed.svg";

const LatestCreations = styled(Box)(({ theme }) => ({
  background: theme.palette.custom.sectionOne,
  padding: "60px 0px 0px 0px",
}));

const TextCenter = styled(Box)({
  padding: "0px 0px 60px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

const CreationItems = styled(Box)(({ theme }) => ({
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
const CreationPerItem = styled(Box)(({ theme }) => ({
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

function Creations() {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("sm")); //below 600
  const isMeduimScreen = useMediaQuery(theme.breakpoints.down("md")); //below 900
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); //from 900 to larger

  const descFontSize = () => {
    if (isSmallerScreen) return "11px";
    if (isMeduimScreen) return "10px";
    if (isLargeScreen) return "14px";
  };

  const getIconWidth = () => {
    if (isSmallerScreen) return "50px";
    if (isMeduimScreen) return "60px";
    if (isLargeScreen) return "90px";
  };

  const creationData = [
    {
      icon: absPrivacy,
      title: "Absolute Privacy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab.",
    },
    {
      icon: serverSec,
      title: "Serverless Security",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab.",
    },
    {
      icon: highSpeed,
      title: "High Speed",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab.",
    },
  ];

  return (
    <>
      <LatestCreations>
        <TextCenter>
          <Typography variant="body1" fontWeight={600}>
            Explore OChain NFTS
          </Typography>
          <Typography variant={isSmallerScreen ? "h4" : "h3"} fontWeight={700}>
            Latest Creations
          </Typography>
        </TextCenter>
        <CreationItems>
          {creationData.map((item, index) => (
            <CreationPerItem key={index}>
              <img
                style={{ width: getIconWidth() }}
                src={item.icon}
                alt={item.title}
              />
              <Typography fontWeight={600}> {item.title} </Typography>
              <Typography
                style={{ fontSize: descFontSize(), textAlign: "center" }}
              >
                {item.description}
              </Typography>
            </CreationPerItem>
          ))}
        </CreationItems>
      </LatestCreations>
    </>
  );
}

export default Creations;
