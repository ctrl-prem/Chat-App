import React, { useRef } from "react";
import AppLayout from "../components/layout/AppLayout";
import { IconButton, Stack } from "@mui/material";
import { greyColor, orangeColor } from "../components/constants/Color";
import {
  AttachFile as AttachFileIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { InputBox } from "../components/styles/StyledComponents";
import FileMenu from "../components/dialog/FileMenu";
import { sampleMessages } from "../components/constants/SampleData";
import MessageComponent from "../components/shared/MessageComponent";

const user = {
  _id: "adkdsfwe",
  name: "Prem Kumar",
};

// eslint-disable-next-line react-refresh/only-export-components
const Chat = () => {
  const containerRef = useRef(null);

  return (
    <>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={greyColor}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
          sampleMessages.map((i)=>(
            <MessageComponent key={i._id} message={i} user={user} />
          ))
        }
      </Stack>
      <form
        style={{
          height: "10%",
        }}
      >
        <Stack
          direction={"row"}
          height={"100%"}
          padding={"1rem"}
          alignItems={"center"}
          position={"relative"}
        >
          <IconButton
            sx={{
              position: "absolute",
              // left: '1.5rem',
              // rotate: '90deg'
            }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder="Type Message Here..." />
          <IconButton
            type="submit"
            sx={{
              bgcolor: orangeColor,
              color: "white",
              marginLeft: "1rem",
              padding: "0.5rem",
              "&:hover": {
                bgcolor: "error.dark",
              },
            }}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default AppLayout()(Chat);
