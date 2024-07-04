import { styled, useTheme } from "@mui/material/styles";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const StorageSec = styled(Box)({
  background: "#6A375A",
});

function StorageToWork() {
  return (
    <>
      <StorageSec>
        <Typography>Put your capital and your storage to work.</Typography>
      </StorageSec>
    </>
  );
}

export default StorageToWork;
