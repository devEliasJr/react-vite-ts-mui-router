import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@mui/material";
import { Toaster } from "./componentes/toast/Toaster";
import Dashboard from "./Pages/dashboard/Dashboard";
import RequireAuth from "./contexts/auth/requireAuth";
import SignInSide from "./Pages/Sign-In";
import Home from "./Pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        <Route index element={<SignInSide />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Outlet />
            </RequireAuth>
          }
        >
          <Route index element={<Dashboard />} /> 
          <Route path="overview" element={<Home />} />
        </Route>
      </Route>
    )
  );

  return (
    <Box>
      <RouterProvider router={router} />
      <Toaster />
    </Box>
  );
}

export default App;
