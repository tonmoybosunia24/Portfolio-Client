import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About/About";
import Services from "../Pages/Services/Services/Services";
import Blog from "../Pages/Blog/Blog/Blog";
import Projects from "../Pages/Projects/Projects/Projects";
import Contact from "../Pages/Contact/Contact/Contact";

const Routes = createBrowserRouter([
       {
              path: '/',
              element: <Root></Root>,
              errorElement: <ErrorPage></ErrorPage>,
              children: [
                     {
                            path: '/',
                            element: <Home></Home>,
                     },
                     {
                            path: '/about',
                            element: <About></About>,
                     },
                     {
                            path: '/services',
                            element: <Services></Services>,
                     },
                     {
                            path: '/blog',
                            element: <Blog></Blog>,
                     },
                     {
                            path: '/projects',
                            element: <Projects></Projects>,
                     },
                     {
                            path: '/contact',
                            element: <Contact></Contact>,
                     },
              ]
       }
]);

export default Routes;