import React, { useEffect } from "react";
import {
     Alert,
     AlertDescription,
     AlertIcon,
     AlertTitle,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const ThankYou = () => {
     const navigate = useNavigate();
     useEffect(() => {
          setTimeout(() => {
               navigate("/");
          }, 2000);
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
