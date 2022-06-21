import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Resources from "./pages/Resources";
import Users from "./pages/Users";

const routes = [
    // Home
    { path: '/', component: Home },
    // Register
    { path: '/register', component: Register },
    // Login
    { path: '/login', component: Login },
    // Users
    { path: '/users', component: Users },
    // Resources
    { path: '/resources', component: Resources },
];

export default routes;