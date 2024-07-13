import { styled, useTheme } from "@mui/material/styles";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import storageImage from "../../assets/png/ratingss.png";
import { TextLeft, StorageContent, StorageData } from "../StylesComponent";
import React from "react";

const StorageSec = styled(Box)(({ theme }) => ({
  background: theme.palette.custom.sectionTwo,
  padding: "100px",
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

function StorageToWork() {
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down("sm")); //below 600
  const isMeduimScreen = useMediaQuery(theme.breakpoints.down("md")); //below 900
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md")); //from 900 to larger
  const isXtraLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const TextWidth = () => {
    if (isSmallerScreen) return "370px";
    if (isMeduimScreen) return "370px";
    if (isLargeScreen) return "492px";
  };

  const ImageWidth = () => {
    if (isSmallerScreen) return "290px";
    if (isMeduimScreen) return "240px";
    if (isLargeScreen) return "380px";
    if (isXtraLargeScreen) return "538px";
  };

  return (
    <>
      <StorageSec>
        <StorageData>
          <StorageContent>
            <TextLeft>
              <Typography
                variant={isSmallerScreen ? "h5" : isMeduimScreen ? "h4" : "h3"}
                style={{ width: TextWidth(), maxWidth: "100%" }}
                fontWeight={700}
              >
                Put your capital and your storage to work.
              </Typography>
              <Typography
                style={{
                  width: TextWidth(),
                  lineHeight: "30px",
                  maxWidth: "100%",
                }}
                fontSize={isSmallerScreen ? "12px" : "14px"}
              >
                As the amount of data on the network continues to grow, so will
                the amount of data stored and accessed on each Node, which also
                means your earnings will increase. Below you'll see what a
                blobber earns on average after a Node is vetted as reliable on
                the network.
                <br></br>
                <br></br>
                Once your Node is verified, you'll start being compensated for
                the storage and bandwidth you provide. Every month you meet the
                requirements, you'll be paid in ZCN.
              </Typography>
            </TextLeft>
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
          </StorageContent>
          <img
            style={{ width: ImageWidth() }}
            src={storageImage}
            alt="st-image"
          />
        </StorageData>
      </StorageSec>
    </>
  );
}

export default StorageToWork;
