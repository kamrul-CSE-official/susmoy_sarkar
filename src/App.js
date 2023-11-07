import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Routers";

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
