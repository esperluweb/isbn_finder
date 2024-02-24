import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import "./scss/variables.scss"

import { routesArray } from "./data/routes/front";
const router = createBrowserRouter(routesArray);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
