import React, { useEffect } from "react";
import {
     Alert,
     AlertDescription,
     AlertIcon,
     AlertTitle,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { saveCartData } from "../redux/utilies/authLocalData";
const ThankYou = () => {
     const navigate = useNavigate();
     useEffect(() => {
          setTimeout(() => {
               navigate("/");
          }, 4000);
          // saveCartData("user_cart_items", []);
          window.localStorage.removeItem("user_cart_items");
     }, []);

     return (
          <Alert
               status="success"
               variant="subtle"
               flexDirection="column"
               alignItems="center"
               justifyContent="center"
               textAlign="center"
               height="200px"
               mt="250px"
               mb="800px"
          >
               <AlertIcon boxSize="40px" mr={0} />
               <AlertTitle mt={4} mb={1} fontSize="lg">
                    Payment Successfull
               </AlertTitle>
               <AlertDescription maxWidth="sm">
                    Thanks 👍 for shopping your product deliver very soon 😊.
               </AlertDescription>
          </Alert>
     );
};

export default ThankYou;
