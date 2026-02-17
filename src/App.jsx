import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantMenu from './pages/RestaurantMenu'
import { AppLayout } from './layout/AppLayout'
import { LogRegister } from './pages/LogRegister'


export default function App() {
  const router = createHashRouter([
    {
      path : "/",
      element : <AppLayout/>,
      children : [
        {
          path: "/",
          element : <Home/>,
        },
        {
          path : "/restaurants/:resID",
          element : <RestaurantMenu/>,
        },
        {
          path : "/logregister",
          element : <LogRegister/>,
        }
      ]
    }
  ])

  return(
    <RouterProvider router={router}/>
  )
 
}
