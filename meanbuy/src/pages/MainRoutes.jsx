import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import FlashSale from "./FlashSale";
import BestDeal from "./BestDeal";
import Shop from "./Shop";
import Trending from "./Trending";
import { Electronics } from "./Electronics";
import Clothing from "./Clothing";
import MarchentLogin from "./MarchentLogin";
import Checkout from "./Checkout";
import Admindashboard from "./Admindashboard";
import ProductUploadMarchent from "../components/ProductUploadMarchent";
import VendorRegistrationForm from "./VendorRegistrationForm";
import CardPayment from "../components/CardPayment";
import DeliveryDetails from "../components/DeliveryDetails";
import ThankYou from "../components/ThankYou";
import Watchpage from "./Watchpage";
import PrivateRoute from "./PrivateRoute";
import PageNotFound from "./PageNotFound";
import { Product } from "./Product";

const MainRoutes = () => {
     return (
          <Routes>
               <Route path="/login" element={<Login />}></Route>
               <Route path="/SignUp" element={<SignUp />}></Route>
               {/* <Route path="/home/electronics" element={<Electronics />} /> */}
               <Route path="/electronics" element={<Electronics />} />
               <Route path="/electronics/:id" element={<Product />} />
               <Route
                    path="/clothing"
                    element={
                         <PrivateRoute>
                              <Clothing />
                         </PrivateRoute>
                    }
               ></Route>
               <Route path="/products/:id" element={<Product />} />
               <Route path="/" element={<Home />} />
               <Route path="/FlashSale" element={<FlashSale />} />
               <Route path="/BestDeal" element={<BestDeal />} />
               <Route path="/Shop" element={<Shop />} />
               <Route path="/Trending" element={<Trending />} />

               <Route path="/Watchpage" element={<Watchpage />} />
               <Route path="/Watchpage/:id" element={<Product />} />
               <Route path="/admindashboard" element={<Admindashboard />} />
               <Route
                    path="/vendorRegistrationForm"
                    element={<VendorRegistrationForm />}
               />
               <Route path="/marchentLogin" element={<MarchentLogin />} />
               <Route
                    path="/productUploadForm"
                    element={<ProductUploadMarchent />}
               />
               <Route path="/checkout" element={<Checkout />} />
               <Route path="/cardpayment" element={<CardPayment />} />
               <Route path="/deliverydetails" element={<DeliveryDetails />} />
               <Route path="/thankyou" element={<ThankYou />} />
               <Route path="*" element={<div>Page Not Found!</div>} />
          </Routes>
     );
};

export default MainRoutes;
