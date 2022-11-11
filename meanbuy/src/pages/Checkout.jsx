import styled from "styled-components";
import React from "react";
import DeliveryAddressContainer from "../components/DeliveryAddressContainer";
import CartDetailCard from "../components/CartDetailCard";

const Checkout = () => {
     return (
          <Wrapper>
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
     //   border: 1px solid red;
     width: 85%;
     margin: 0 auto;
     display: flex;
     flex-direction: row;
     //   height: 100vh;
`;
const WrapperCartShow = styled.div`
     width: 50%;
`;

const WrapperUserAndPaymentDetails = styled.div`
     width: 50%;
`;

export default Checkout;
