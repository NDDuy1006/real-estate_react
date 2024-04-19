import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ListPage from "./pages/listPagge/ListPage"
import Layout from "./pages/layout/Layout"
import SinglePage from "./pages/singlePage/SinglePage"
import LoginPage from "./pages/loginPage/LoginPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/list",
          element: <ListPage/>
        },
        {
          path: "/:id",
          element: <SinglePage/>
        },
        {
          path: "/loginPage",
          element: <LoginPage/>
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
