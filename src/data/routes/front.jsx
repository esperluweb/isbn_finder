import Layout from "../../layout/Layout";

export const routesArray = [
    {
        path: "",
        element: <Layout/>,
        children: [
            {
            path: "/",
            element: <div>Hello world!</div>,
            }
        ]
    },
];