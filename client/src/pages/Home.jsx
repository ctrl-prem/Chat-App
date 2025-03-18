import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Avatar, Box, Stack, Typography } from "@mui/material";

// eslint-disable-next-line react-refresh/only-export-components
const Home = () => {
  return (
    <Box
      bgcolor={"rgba(0,0,0,0.8)"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack alignItems={'center'}>
        <Avatar
          sx={{
            width: "200px",
            height: "200px",
            objectFit: "contain",
            marginBottom: "1rem",
            border: "5px solid white",
          }}
        />
        <Typography p={"2rem"} variant="h5" color="rgb(160, 159, 159)">
          Select a friend to Chat
        </Typography>
      </Stack>
    </Box>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppLayout()(Home);
