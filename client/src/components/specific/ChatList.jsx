import { Stack } from "@mui/material";
import React, { memo } from "react";
import ChatItem from "../shared/ChatItem";
import { bgGradient } from "../constants/Color";

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers=[],
  newMessagesAlert = [
    {
      chatId: "",
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} overflow={'auto'} height={'100%'} sx={{
      backgroundImage: bgGradient,
    }} >
      {chats?.map((data, index) => {
        // ? make sure that chats is an array.
        const { avatar, name, _id, groupChat, members } = data;

        const newMessageAlert = newMessagesAlert.find(
          ({ chatId }) => chatId === _id
        );// find() iterate and return the object when first met with the condition.
        const isOnline = members?.some(() => onlineUsers.includes(_id)); // it return true/false based on condition passed in members array.

        return (
          <ChatItem
            index={index}
            newMessageAlert={newMessageAlert}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            _id={_id}
            key={_id}
            groupChat={groupChat}
            sameSender={chatId === _id}
            handleDeleteChat={handleDeleteChat}
          />
        );
      })}
    </Stack>
  );
};

export default memo(ChatList);
