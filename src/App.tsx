import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ListPage from "./pages/listPage/ListPage"
import Layout from "./pages/layout/Layout"
import SinglePage from "./pages/singlePage/SinglePage"
import LoginPage from "./pages/loginPage/LoginPage"
import ProfilePage from "./pages/profilePage/ProfilePage"

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
          path: "/profile",
          element: <ProfilePage/>
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
