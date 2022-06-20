import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Users from "./pages/Users";

const routes = [
    // Home
    {path: '/', component: Home},
    // Register
    {path: '/register', component: Register},
    // Login
    {path: '/login', component: Login},
    // Users
    {path: '/users', component: Users}
];

export default routes;