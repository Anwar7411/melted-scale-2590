import styled from "styled-components";
import React from "react";
import CartShow from "./CartShow";
import DeliveryAddressContainer from "./DeliveryAddressContainer";

const Checkout = () => {
     return (
          <Wrapper style={{ display: "flex", height: "100vh" }}>
               <WrapperUserAndPaymentDetails>
                    <DeliveryAddressContainer />
               </WrapperUserAndPaymentDetails>

               <WrapperCartShow>
                    <CartShow />
               </WrapperCartShow>
          </Wrapper>
     );
};

const Wrapper = styled.div``;
const WrapperCartShow = styled.div`
     width: 50%;
     border: 1px solid red;
`;

const WrapperUserAndPaymentDetails = styled.div`
     border: 1px solid red;
     width: 50%;
`;

export default Checkout;
