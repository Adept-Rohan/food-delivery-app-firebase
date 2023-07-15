import Header from "./components/Header"
import Home from "./pages/Home"
import { AnimatePresence } from "framer-motion"
import Footer from './components/Footer'
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import Create from './pages/Create'

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/createitem',
        element: <Create />
      }
    ]
  }
])


function App() {
  return (
    <>
      <AnimatePresence>
        <div className="flex flex-col">
          <RouterProvider router={router} />
        </div>
      </AnimatePresence>

    </>
  )
}

export default App
