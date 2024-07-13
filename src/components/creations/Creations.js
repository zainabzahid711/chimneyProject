import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import absPrivacy from "../../assets/svg/absPrivacy.svg";
import serverSec from "../../assets/svg/serverSecurity.svg";
import highSpeed from "../../assets/svg/highSpeed.svg";
//import styles from common styles
import { TextCenter, CreationItems, CreationPerItem } from "../StylesComponent";

const LatestCreations = styled(Box)(({ theme }) => ({
  background: theme.palette.custom.sectionOne,
  padding: "60px 0px 0px 0px",
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
