import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
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
import FeedbackForm from "./FeedbackForm";
import { Cart } from "./Cart";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/home/electronics" element={<Electronics />} />
      <Route path="/electronics/:id" element={<Product />} />
      <Route path="/clothing" element={<Clothing />}></Route>
      <Route path="/products/:id" element={<Product />} />
      <Route path="/Watchpage" element={<Watchpage />} />
      <Route path="/Watches/:id" element={<Product />} />
      <Route path="/admindashboard" element={<Admindashboard />} />
      <Route
        path="/vendorRegistrationForm"
        element={<VendorRegistrationForm />}
      />
      <Route path="/marchentLogin" element={<MarchentLogin />} />
      <Route path="/productUploadForm" element={<ProductUploadMarchent />} />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route
        path="/cardpayment"
        element={
          <PrivateRoute>
            <CardPayment />
          </PrivateRoute>
        }
      />
      <Route path="/deliverydetails" element={<DeliveryDetails />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/FeedbackForm" element={<FeedbackForm />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MainRoutes;
