import { createBrowserRouter } from "react-router-dom"
// import CatalogPage from "../pages/CatalogPage"
import Root from "../pages/root"
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import FavoritePage from "../pages/FavoritePage"

////////////////////
import { CSSTransition, TransitionGroup } from 'react-transition-group';

////////////////////////

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/profile",
                element:
                    <ProfilePage />

            },
            {
                path: "/favorite",
                element: <FavoritePage />,
            },
        ]
    }
])

export default router