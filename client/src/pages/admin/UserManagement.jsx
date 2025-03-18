import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/shared/Table";
import { Avatar } from "@mui/material";
import { dashboardData } from "../../components/constants/SampleData";
import { transformImage } from "../../libs/features";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 150,
    renderCell: (params) => ( // to render the image in the form image in the row, else it will give the url only. params can access data.
      <Avatar alt={params.row.name} src={params.row.avatar} />
    ),
    headerClassName: "table-header",
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    headerClassName: "table-header",
  },
  {
    field: "username",
    headerName: "Username",
    width: 200,
    headerClassName: "table-header",
  },
  {
    field: "friends",
    headerName: "Friends",
    width: 150,
    headerClassName: "table-header",
  },
  {
    field: "groups",
    headerName: "Groups",
    width: 150,
    headerClassName: "table-header",
  },
];

const UserManagement = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(
      dashboardData.users.map((i) => ({
        ...i,
        id: i._id,
        avatar: transformImage(i.avatar, 50),
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table heading={"All Users"} columns={columns} rows={rows} />
    </AdminLayout>
  );
};

export default UserManagement;
