import Layout from "../../layout/Layout";
import Home from "../../pages/Home";

export const routesArray = [
    {
        path: "",
        element: <Layout/>,
        children: [
            {
            path: "/",
            element: <Home/>,
            }
        ]
    },
];