import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/Root"
import { getPrettyPosts, getPostBySlug } from './posts'
import './index.css'
import ErrorPage from "./error-page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Post from './routes/Post'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    loader: getPrettyPosts,
    children: [
      {
        path: "post/:postSlug",
        element: <Post></Post>,
        loader: getPostBySlug
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)