import styled from "styled-components";
import React from "react";
import DeliveryAddressContainer from "../components/DeliveryAddressContainer";
import CartDetailCard from "../components/CartDetailCard";

const Checkout = () => {
     return (
          <Wrapper style={{ display: "flex", height: "100vh" }}>
               <WrapperUserAndPaymentDetails>
                    <DeliveryAddressContainer />
               </WrapperUserAndPaymentDetails>

               <WrapperCartShow>
                    <CartDetailCard />
               </WrapperCartShow>
          </Wrapper>
     );
};

const Wrapper = styled.div`
     border: 1px solid red;
`;
const WrapperCartShow = styled.div`
     width: 50%;
`;

const WrapperUserAndPaymentDetails = styled.div`
     width: 50%;
`;

export default Checkout;
