import { Route } from "react-router-dom"
import AboutPage from "../containers/HomeTemplate/AboutPage"
import AuthPage from "../containers/HomeTemplate/AuthPage"
import HomePage from "../containers/HomeTemplate/HomePage"
import Register from "../containers/HomeTemplate/Register"
import Management from "../containers/HomeTemplate/Management"

const routeHome = [{
    exact: true,
    path: "/",
    component: HomePage
},
{
    exact: false,
    path: "/about",
    component: AboutPage
},
{
    exact: false,
    path: "/auth",
    component: AuthPage
},
{
    exact: false,
    path: "/register",
    component: Register
},
{
    exact: false,
    path: "/management",
    component: Management
}]
const routeAdmin = []

function renderRouteHome() {
    return routeHome.map((route, index) => {
        return <Route exact={route.exact} path={route.path} component={route.component} />
    })

}

export { renderRouteHome }