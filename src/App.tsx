import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInSide from "./Pages/Sign-In";
import { Box } from "@mui/material";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignInSide />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return (
    <Box width={"100vw"}>
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
