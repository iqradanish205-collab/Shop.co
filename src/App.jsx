import {  Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Product from "./Pages/ProductPage"
import Shop from "./Pages/Shop";
import { CartProvider } from "./Components/CartContext";
import CartPage from "./Pages/CartPage";


function App() {
  return (
   

     
        <CartProvider>
           <Routes>

          <Route
          path="/Home"
          element={<Home />}
        />
        <Route
          path="/ProductPage"
          element={<Product />}
        />
        <Route
          path="/Shop"
          element={<Shop />}
        />
         <Route
          path="/CartPage"
          element={<CartPage />}
        />
        </Routes>
        </CartProvider>

        


      

    
  );
}

export default App;
