import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/shared/Table";
import { Avatar, Stack } from "@mui/material";
import AvatarCard from "../../components/shared/AvatarCard";
import { dashboardData } from "../../components/constants/SampleData";
import { transformImage } from "../../libs/features";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 300,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 150,
    renderCell: (
      params // to render the image in the form image in the row, else it will give the url only. params can access data.
    ) => <AvatarCard avatar={params.row.avatar} />,
    headerClassName: "table-header",
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    headerClassName: "table-header",
  },
  {
    field: "totalMembers",
    headerName: "Total Members",
    width: 120,
    headerClassName: "table-header",
  },
  {
    field: "members",
    headerName: "Members",
    width: 400,
    headerClassName: "table-header",
    renderCell: (params) => (
      <AvatarCard max={100} avatar={params.row.members} />
    ),
  },
  {
    field: "totalMessages",
    headerName: "Total Messages",
    width: 120,
    headerClassName: "table-header",
  },
  {
    field: "creator",
    headerName: "Created By",
    width: 250,
    headerClassName: "table-header",
    renderCell: (params) => (
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <Avatar
          alt={params.row.creator.name}
          src={params.row.creator.avatar}
        />
        <span>{params.row.creator.name}</span>
      </Stack>
    ),
  },
];

const ChatManagement = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(
      dashboardData.chats.map((i) => ({
        ...i,
        id: i._id,
        avatar: i.avatar.map((i) => transformImage(i, 50)),
        members: i.members.map((i) => transformImage(i.avatar, 50)),
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"All Chats"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default ChatManagement;
