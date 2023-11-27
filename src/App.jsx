import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./scenes/Layout";
import IndexPage from "./scenes/IndexPage";
import About from "./scenes/about";
import ErrorPage from "./scenes/errorPage";
import ProjectItem from "./scenes/projectItem";

// Client-side Routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<IndexPage />} />
        <Route path="about" element={<About />} />
        <Route path="projects/:projectId" element={<ProjectItem />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
