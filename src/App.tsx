import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInSide from "./Pages/Sign-In";
import { Box } from "@mui/material";
import { Toaster } from "./componentes/toast/Toaster";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignInSide />,
    },
    {
      path: "/dashboard",
      element: <div></div>,
    },
  ]);

  return (
    <Box width={"100vw"}>
      <RouterProvider router={router} />
      <Toaster />
    </Box>
  );
}

export default App;
