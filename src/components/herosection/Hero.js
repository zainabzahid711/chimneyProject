import { styled, useTheme } from "@mui/material/styles";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import heroArt from "../../assets/png/Art.png";
import React from "react";

const TextArea = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  textAlign: "center",
});

const BtnDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 40,
  gap: 20,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

function Hero() {
  const theme = useTheme();
  const isXtraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMeduimScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  const getImgWidth = () => {
    if (isXtraSmall) return "250px";
    if (isSmallerScreen) return "280px";
    if (isMeduimScreen) return "550px";
    if (isLargeScreen) return "800px";
    return "860px";
  };

  const getTextWidth = () => {
    if (isXtraSmall) return "280px";
    if (isSmallerScreen) return "250px";
    if (isMeduimScreen) return "650px";
    if (isLargeScreen) return "850px";
    return "800px";
  };

  const getspanWidth = () => {
    if (isXtraSmall) return "280px";
    if (isSmallerScreen) return "245px";
    if (isMeduimScreen) return "550px";
    if (isLargeScreen) return "800px";
  };

  const textFontSize = () => {
    if (isXtraSmall) return "12px";
    if (isSmallerScreen) return "12px";
    if (isMeduimScreen) return "14px";
    if (isLargeScreen) return "14px";
  };

  const isDarkMode = theme.palette.mode === "dark";
  return (
    <>
      <TextArea>
        <Typography variant="body1"> Store Date. Stake. Earn.</Typography>
        <Typography
          variant={
            isXtraSmall
              ? "h6"
              : isSmallerScreen
              ? "h5"
              : isMeduimScreen
              ? "h3"
              : isLargeScreen
              ? "h2"
              : "h2"
          }
          style={{
            width: getTextWidth(),
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          A high performance decenterilzed storage network
        </Typography>
      </TextArea>
      <BtnDiv>
        <Button
          variant="outlined"
          sx={{
            width: "164px",
            borderRadius: "8px",
            borderColor: isDarkMode ? "white" : "black",
            color: isDarkMode ? "white" : "black",
            "&:hover": {
              borderColor: isDarkMode ? "white" : "black",
              backgroundColor: isDarkMode
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          Learn More
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "164px",
            borderRadius: "8px",
            backgroundColor: "#B35291",
            color: "white",
            "&:hover": {
              backgroundColor: "#9E4580",
            },
          }}
        >
          Host a server
        </Button>
      </BtnDiv>
      <TextArea>
        <Typography
          style={{
            width: getspanWidth(),
            fontSize: textFontSize(),
            textAlign: "cetner",
          }}
        >
          High performance decentralized storage network. Lorem Ipsum is simply
          dummy text dummy of the.
        </Typography>
        <img
          src={heroArt}
          style={{ width: getImgWidth(), marginTop: "40px" }}
          alt="Hero Art"
        />
      </TextArea>
    </>
  );
}

export default Hero;
