import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalendarIcon,
} from "@mui/icons-material";
import moment from "moment";

const Profile = () => {
  return (
    <Stack spacing={"2rem"} alignItems={"center"}>
      <Avatar
        sx={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"I am a software developer."} />
      <ProfileCard
        heading={"Username"}
        text={"||_p_r_e_m_||"}
        Icon={<UserNameIcon />}
      />
      <ProfileCard heading={"Name"} text={"Prem Kumar"} Icon={<FaceIcon />} />
      <ProfileCard
        heading={"Joined"}
        text={moment("2024-12-05T18:30:00.000Z").fromNow()}
        Icon={<CalendarIcon />}
      />
      {/* fromNow() function return the differece of time from time passed to moment. */}
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => (
  <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
  >
    {Icon && Icon} {/* first check for Icon if true then use it. */}
    <Stack>
      <Typography variant="body1">{text}</Typography>
      <Typography color={"gray"} variant="caption">
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;
