import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { TextLeft } from "../StylesComponent";
import { TextWidth, DescriptionWidth } from "../util";
import whitePaper from "../../assets/svg/whitePaper.svg";
import Docs from "../../assets/svg/document.svg";
import forum from "../../assets/svg/form.svg";
import { UserQuestions, Network, PerNetwork } from "../StylesComponent";
import { globalNetworkIcon } from "../util";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Questions = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "646px",
  maxWidth: "100%",
  marginTop: 40,
  gap: 20,
}));

const PerQuestionAns = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: 20,
  gap: 10,
}));

const AnsDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "10px",
  gap: 10,
  color: "#666666",
}));

const QsDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  borderTop: "1px solid #8B8B8B4D",
  padding: "10px",
  gap: 10,
  cursor: "pointer",
}));

function Faqs() {
  const [expandState, setExpandState] = useState(null);

  const toggleExpand = (index) => {
    setExpandState(expandState === index ? null : index);
  };
  const questionArryy = [
    {
      heading: "This is a question?",
      answerText:
        "Lorem ipsum dolor sit amet, aeque tation vis ei. Ne his simul sensibus percipitur.",
    },
    {
      heading: "This is a question?",
      answerText:
        "Lorem ipsum dolor sit amet, aeque tation vis ei. Ne his simul sensibus percipitur. ",
    },
    {
      heading: "This is a question?",
      answerText:
        "Lorem ipsum dolor sit amet, aeque tation vis ei. Ne his simul sensibus percipitur. ",
    },
    {
      heading: "This is a question?",
      answerText:
        "Lorem ipsum dolor sit amet, aeque tation vis ei. Ne his simul sensibus percipitur.",
    },
    {
      heading: "This is a question?",
      answerText:
        "Lorem ipsum dolor sit amet, aeque tation vis ei. Ne his simul sensibus percipitur.",
    },
  ];
  const GlobalNetworks = [
    {
      image: whitePaper,
      mainText: "Whitepaper",
      caption:
        "Read Blimp whitepaper in order to underdstand the requirements and features.",
    },
    {
      image: Docs,
      mainText: "Documentation",
      caption:
        "Visit the 0Chain documentation for detailed guides and setup instructions.",
    },
    {
      image: forum,
      mainText: "Forum",
      caption:
        "Check our forum to ask questions and find resources for common.",
    },
  ];
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("sm")); //below 600
  const isMeduimScreen = useMediaQuery(theme.breakpoints.down("md")); //below 900
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); //from 900 to larger
  return (
    <>
      <UserQuestions>
        <TextLeft>
          <Typography
            variant={isSmallerScreen ? "h5" : isMeduimScreen ? "h4" : "h4"}
            style={{ width: DescriptionWidth(), maxWidth: "100%" }}
            fontWeight={700}
          >
            Frequenlty Asked Questions
          </Typography>
          <Typography
            style={{
              width: TextWidth(),
              lineHeight: "30px",
              maxWidth: "100%",
            }}
            fontSize={isSmallerScreen ? "12px" : "14px"}
            marginTop={"20px"}
          >
            We don't own or operate a single data center. Instead, we take
            advanatage of our global network of storage nodes made by people
            like you who are certain their extra resources.
          </Typography>
        </TextLeft>
        <Network>
          {GlobalNetworks.map((item, index) => (
            <PerNetwork key={index}>
              <img
                style={{
                  width: globalNetworkIcon(
                    isSmallerScreen,
                    isMeduimScreen,
                    isLargeScreen
                  ),
                  maxWidth: "100%",
                }}
                src={item.image}
              />
              <Typography fontWeight={600}>{item.mainText} </Typography>
              <Typography
                style={{ fontSize: isSmallerScreen ? "13px" : "12px" }}
              >
                {item.caption}
              </Typography>
            </PerNetwork>
          ))}
        </Network>
        <Questions>
          <Typography fontWeight={600}>This is a question? </Typography>
          <Typography style={{ color: "#666666" }}>
            Lorem ipsum dolor sit amet, aeque tation vis ei. Ne his simul
            sensibus percipitur.Lorem ipsum dolor sit amet, aeque tation vis ei.
            Ne his simul sensibus percipitur.
          </Typography>
          {questionArryy.map((item, index) => (
            <PerQuestionAns key={index}>
              <QsDiv onClick={() => toggleExpand(index)}>
                <Typography fontWeight={600}>{item.heading} </Typography>
                {expandState === index ? <RemoveIcon /> : <AddIcon />}
              </QsDiv>
              {expandState === index && (
                <AnsDiv>
                  <Typography>{item.answerText} </Typography>
                </AnsDiv>
              )}
            </PerQuestionAns>
          ))}
        </Questions>
      </UserQuestions>
    </>
  );
}

export default Faqs;
