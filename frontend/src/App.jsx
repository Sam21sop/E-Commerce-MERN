
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./component/nav/Navbar";
import AddProductForm from "./component/addProductModal/AddProductForm";
import UpdateProductForm from "./component/updateProductModal/UpdateProductForm";
import HomePage from "./component/HomePage/HomePage";




function App() {

  const route = createBrowserRouter([
    {
      path:'/',
      element: <Navbar/>,
      children:[
        {
          index:true,
          element:<HomePage/>
        },
        {
          path:'/add-product',
          element:<AddProductForm/>
        },
        
      ]
    }
  ])
  
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
};

export default App
