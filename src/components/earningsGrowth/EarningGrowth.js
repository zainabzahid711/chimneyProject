import { styled, useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import pinkfirst from "../../assets/svg/pinkRec.svg";
import whiteCircle from "../../assets/svg/whiteRec.svg";
import blackCircle from "../../assets/svg/purpleRec.svg";
import GrowthGraph from "../../assets/png/BarChartResponsive.png";
import React from "react";

import {
  TextCenter,
  IconsRow,
  PericonRow,
  Dstorage,
  DstorageItems,
  DstoragePerItem,
} from "../StylesComponent";

const EarningSec = styled(Box)(({ theme }) => ({
  background: theme.palette.custom.sectionEarningGrowth,
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

function EarningGrowth() {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("sm")); //below 600
  const isMeduimScreen = useMediaQuery(theme.breakpoints.down("md")); //below 900
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); //from 900 to larger
  const isXtraLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const TextWidth = () => {
    if (isSmallerScreen) return "370px";
    if (isMeduimScreen) return "370px";
    if (isLargeScreen) return "529px";
    if (isXtraLargeScreen) return "780px";
  };

  const DescriptionWidth = () => {
    if (isSmallerScreen) return "370px";
    if (isMeduimScreen) return "570px";
    if (isLargeScreen) return "780px";
    if (isXtraLargeScreen) return "780px";
  };

  const GrowthCostArray = [
    { circleIcon: pinkfirst, describe: "Total cost" },
    { circleIcon: whiteCircle, describe: "Data writes" },
    { circleIcon: blackCircle, describe: "Data Reads" },
  ];

  const PriceComparisonArry = [
    {
      title: "Chimney 0 Box Dstorage",
      caption: [
        "The notes should state the availability, reliability and expected performance relative to AWS s3.",
        "The notes should state the availability, reliability and expected performance relative to AWS s3.",
      ],
    },
    {
      title: "AWS S3 Standard",
      caption: [
        "The notes should state the availability, reliability and expected performance relative to AWS s3.",
        "The notes should state the availability, reliability and expected performance relative to AWS s3.",
      ],
    },
    {
      title: "Azure Standard (GPv2) storage",
      caption: [
        "The notes should state the availability, reliability and expected performance relative to AWS s3.",
        "The notes should state the availability, reliability and expected performance relative to AWS s3.",
      ],
    },
    {
      title: "CGCS Standard",
      caption: [
        "The notes should state the availability, reliability and expected performance relative to AWS s3.",
        "The notes should state the availability, reliability and expected performance relative to AWS s3.",
      ],
    },
  ];

  return (
    <>
      <EarningSec>
        <TextCenter>
          <Typography
            variant={isSmallerScreen ? "h5" : isMeduimScreen ? "h4" : "h3"}
            style={{ width: TextWidth(), maxWidth: "100%" }}
            fontWeight={700}
          >
            Put your capital and your storage to work.
          </Typography>
          <Typography
            style={{
              width: DescriptionWidth(),
              lineHeight: "30px",
              maxWidth: "100%",
            }}
            fontSize={isSmallerScreen ? "12px" : "14px"}
            marginTop={"25px"}
          >
            As the amount of data on the network continues to grow, so will the
            amount of data stored and accessed on each Node, which also means
            your earnings will increase. Below you'll see what a blobber earns
            on average after a Node is vetted as reliable on the network.
          </Typography>
        </TextCenter>
        <IconsRow>
          {GrowthCostArray.map((item, index) => (
            <PericonRow key={index}>
              <img src={item.circleIcon} alt="circleIcon" />
              <Typography>{item.describe}</Typography>
            </PericonRow>
          ))}
        </IconsRow>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
          }}
        >
          <img
            width={
              isSmallerScreen
                ? "578px"
                : isMeduimScreen
                ? "648px"
                : isLargeScreen
                ? "878px"
                : "878px"
            }
            src={GrowthGraph}
            alt="GrowthGraph"
            style={{
              margin: "0 auto",
              maxWidth: "100%",
            }}
          />
        </div>
        <Dstorage>
          <Typography
            variant="body1"
            style={{ textAlign: "center", fontWeight: "600" }}
          >
            Dstorage price comparisons reveal market opportunity
          </Typography>
          <DstorageItems>
            {PriceComparisonArry.map((item, index) => (
              <DstoragePerItem key={index}>
                <Typography
                  width={"300px"}
                  style={{ fontWeight: "600", fontSize: "13px" }}
                >
                  {item.title}
                </Typography>
                <Box
                  width={
                    isSmallerScreen
                      ? "300px"
                      : isMeduimScreen
                      ? "370px"
                      : "480px"
                  }
                >
                  {item.caption.map((line, i) => (
                    <Typography key={i} fontSize={"13px"} marginBottom={"15px"}>
                      {line}
                    </Typography>
                  ))}
                </Box>
              </DstoragePerItem>
            ))}
          </DstorageItems>
        </Dstorage>
      </EarningSec>
    </>
  );
}

export default EarningGrowth;
