import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

export const LayoutLoader = () => {
  return (
    <Grid container height={"calc(100vh-4rem)"} spacing={"1rem"}>
      <Grid
        item
        sm={4}
        md={3}
        lg={3}
        sx={{ display: { xs: "none", sm: "block" } }}
        height={"100%"}
      >
        <Skeleton variant="rectangular" height={"100vh"} /> {/* shady animation of loading */}
      </Grid>

      <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
        {/* 12 cover complete display. xs(extra small) */}
        <Stack spacing={"1rem"}> {/* stack the component inside */}
          {Array.from({ length: 10 }).map((_, index) => ( // Array.from({length: 10}) is an array of 10 length with no values and _ is just a placeholder in map() function, key will be index here.
            <Skeleton key={index} variant="rounded" height={"5rem"} />
          ))}
        </Stack>
      </Grid>

      <Grid
        item
        md={4}
        lg={3}
        height={"100%"}
        sx={{
          display: { xs: "none", md: "block" },
          //   padding: "2rem",
          //   bgcolor: "rgba(0, 0, 0, 0.25)",
        }}
      >
        <Skeleton variant="rectangular" height={"100vh"} />
      </Grid>
    </Grid>
  );
};
