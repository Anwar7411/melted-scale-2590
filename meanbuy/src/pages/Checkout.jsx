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
    
     width: 85%;
     margin: 0 auto;
     display: flex;
     margin-top:150px;
     flex-direction: row;
   
`;
const WrapperCartShow = styled.div`
     width: 50%;
`;

const WrapperUserAndPaymentDetails = styled.div`
     width: 50%;
`;

export default Checkout;
