import React from "react";
import {
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { bgGradient } from "../../components/constants/Color";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";

const isAdmin = true;

const AdminLogin = () => {
  const secretKey = useInputValidation("");
  const submitHandler = (e) => {
    e.preventDefault();
  };

  if(isAdmin) return <Navigate to="/admin/dashboard" />

  return (
    <div
      style={{
        backgroundImage: bgGradient,
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Admin Login</Typography>
          <form
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              label="secret key"
              type="password" // you will see only dots while typing
              margin="normal"
              variant="outlined"
              value={secretKey.value}
              onChange={secretKey.changeHandler} // changeHandler function validate's the input and display the result about the input.
            ></TextField>
            <Button
              sx={{ marginTop: "1rem" }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
