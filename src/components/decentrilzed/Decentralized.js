import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import blocks1 from "../../assets/svg/box1.svg";
import block2 from "../../assets/svg/Blocks2.svg";
import blocks3 from "../../assets/svg/bloxes3.svg";

import blocksBgImage from "../../assets/png/HeroArtBoxes.png";
import {
  TextLeft,
  DecentralizationSec,
  SourceItemTitle,
  Resources,
  ResourcesPerItem,
} from "../StylesComponent";

function Decentralized() {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("sm")); //below 600
  const isMeduimScreen = useMediaQuery(theme.breakpoints.down("md")); //below 900
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); //from 900 to larger

  const TextWidth = () => {
    if (isSmallerScreen) return "340px";
    if (isMeduimScreen) return "370px";
    if (isLargeScreen) return "403px";
  };

  const DescriptionWidth = () => {
    if (isSmallerScreen) return "330px";
    if (isMeduimScreen) return "470px";
    if (isLargeScreen) return "550px";
  };

  const resources = [
    {
      imgSrc: blocks1,
      altText: "hardware Blocks1",
      title: "Hardware Flexibility",
      description:
        "Use your existing server and allocate your storage and bandwidth for 0Chain DCS (Decentralized Cloud Storage). Or you can rent a server and you'll be a part of making data more private, secure, giving ownership of data back to the people.",
    },
    {
      imgSrc: block2,
      altText: "install Blocks2",
      title: "Easy Install",
      description:
        "Use your existing server and allocate your storage and bandwidth for 0Chain DCS (Decentralized Cloud Storage). Or you can rent a server and you'll be a part of making data more private, secure, giving ownership of data back to the people.",
    },
    {
      imgSrc: blocks3,
      altText: "getpaid Blocks3",
      title: "Get Paid",
      description:
        "Use your existing server and allocate your storage and bandwidth for 0Chain DCS (Decentralized Cloud Storage). Or you can rent a server and you'll be a part of making data more private, secure, giving ownership of data back to the people.",
    },
  ];

  return (
    <>
      <DecentralizationSec>
        <TextLeft>
          <Typography
            variant={isSmallerScreen ? "h5" : isMeduimScreen ? "h4" : "h3"}
            style={{ width: TextWidth(), maxWidth: "100%" }}
            fontWeight={700}
          >
            Make Decentralization Possible{" "}
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
            We don't own or operate a single data center. Instead, we take
            advanatage of our global network of storage nodes made by people
            like you who are certain their extra resources.
          </Typography>
          <Resources>
            {resources.map((item, index) => (
              <ResourcesPerItem key={index}>
                <SourceItemTitle>
                  <img src={item.imgSrc} alt={item.altText} />
                  <Typography fontWeight={700}>{item.title}</Typography>
                </SourceItemTitle>
                <Typography
                  style={{
                    width: DescriptionWidth(),
                    maxWidth: "100%",
                    fontSize: isSmallerScreen ? "12px" : "14px",
                  }}
                >
                  {item.description}
                </Typography>
              </ResourcesPerItem>
            ))}
          </Resources>
        </TextLeft>
        <img
          style={{
            display: isMeduimScreen ? "none" : "block",
            width: isMeduimScreen
              ? undefined
              : isLargeScreen
              ? "400px"
              : "500px",
          }}
          src={blocksBgImage}
          alt="BlocksArt"
        />
      </DecentralizationSec>
    </>
  );
}

export default Decentralized;
