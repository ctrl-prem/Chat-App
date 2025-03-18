import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/shared/Table";
import { dashboardData } from "../../components/constants/SampleData";
import { fileFormat, transformImage } from "../../libs/features";
import moment from "moment";
import { Avatar, Box, Stack } from "@mui/material";
import RenderAttachment from '../../components/shared/RenderAttachment'

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "attachments",
    headerName: "Attachments",
    width: 200,
    headerClassName: "table-header",
    renderCell: (
      params // to render the image in the form image in the row, else it will give the url only. params can access data.
    ) => {
      const { attachments } = params.row;
      return attachments?.length > 0
        ? attachments.map((i) => {
            const url = i.url;
            const file = fileFormat(url);
            return (
              <Box key={i.name}>
                <a
                  href={i.url}
                  download
                  target="_blank"
                  style={{
                    color: "black",
                  }}
                >
                  {RenderAttachment(file, url)}
                </a>
              </Box>
            );
          })
        : "No Attachments";
    },
  },
  {
    field: "content",
    headerName: "Content",
    width: 400,
    headerClassName: "table-header",
  },
  {
    field: "sender",
    headerName: "Sent By",
    width: 200,
    renderCell: (
      params // to render the image in the form image in the row, else it will give the url only. params can access data.
    ) => (
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>
    ),
    headerClassName: "table-header",
  },
  {
    field: "chat",
    headerName: "Chat",
    width: 220,
    headerClassName: "table-header",
  },
  {
    field: "groupChat",
    headerName: "Group Chat",
    width: 100,
    headerClassName: "table-header",
  },
  {
    field: "createdAt",
    headerName: "Time",
    width: 250,
    headerClassName: "table-header",
  },
];

const MessageManagement = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(
      dashboardData.messages.map((i) => ({
        ...i,
        id: i._id,
        sender: {
          name: i.sender.name,
          avatar: transformImage(i.sender.avatar, 50),
        },
        createdAt: moment(i.createdAt).format("MMMM Do YYYY, h:mm:ss a"),
      }))
    );
  }, []);
  return (
    <AdminLayout>
      <Table heading={"All Messages"} columns={columns} rows={rows} rowHeight={200}/>
    </AdminLayout>
  );
};

export default MessageManagement;
