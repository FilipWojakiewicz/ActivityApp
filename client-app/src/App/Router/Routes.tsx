import { createBrowserRouter, RouteObject } from "react-router-dom"
import App from "../Layout/App"
import HomePage from "../../Features/Home/HomgePage"
import ActivityDashboard from "../../Features/Activities/Dashboard/ActivityDashboard"
import ActivityForm from "../../Features/Activities/Form/ActivityForm"
import ActivityDetails from "../../Features/Activities/Details/ActivityDetails"

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'createActivity', element: <ActivityForm key='create'/>},
            {path: 'manage/:id', element: <ActivityForm key='manage'/>}
        ]
    }
]

export const router = createBrowserRouter(routes)