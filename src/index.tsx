import { App } from "@/components/App"
import {createRoot} from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root is undefined')
}

const container = createRoot(root)

const router = createBrowserRouter([{
  path:'/',
  element: <App/>,
  children: [
    {
      path: '/about',
      element: <div>about</div>
    },
  ]
},
{
  path: '/dashboard',
  element: <div>dashboard</div>
},
])

container.render(<RouterProvider router={router}/>)