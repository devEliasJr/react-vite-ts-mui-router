import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInSide from "./Pages/Sign-In";
import { Box } from "@mui/material";
import { Toaster } from "./componentes/toast/Toaster";
import Dashboard from "./Pages/dashboard/Dashboard";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignInSide />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
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
