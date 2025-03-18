import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline /> {/* set basic css properties. */}
    <div onContextMenu={(e) => e.preventDefault()}> {/* this is to prevent default right-click behaviour. */}
      <App />
    </div>
  </StrictMode>
);
