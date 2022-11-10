import React from "react";
import styled from "styled-components";

const StepsSection = () => {
     return (
          <Wrapper>
               <HeadingAndText>
                    <Text>It's Easy And Exciting to Sell With us!</Text>
                    <Paragraph>
                         The revolutionary platform of MeanBuy makes it an
                         exciting place to sell your products and grow your
                         business. HappyCart.com is a "Flexible-price" market
                         place, which offers the sellers a unique opportunity to
                         sell products at different rates without waiting for
                         any specific discount season.
                    </Paragraph>
               </HeadingAndText>
               <CardContainer>
                    <StepsCard>
                         <Text>1</Text>
                         <Paragraph style={{ color: "#F7941D" }}>
                              List Your Products
                         </Paragraph>
                         <Paragraph>
                              Our experts will help you list your products on
                              our dynamic platform.
                         </Paragraph>
                    </StepsCard>

                    <StepsCard>
                         <Text>2</Text>
                         <Paragraph style={{ color: "#F7941D" }}>
                              Sell across India
                         </Paragraph>
                         <Paragraph>
                              With us, you are visible to customers across India
                              which gives a pan India exposure to your brand.
                         </Paragraph>
                    </StepsCard>
                    <StepsCard style={{ height: "300px" }}>
                         <Text>3</Text>
                         <Paragraph style={{ color: "#F7941D" }}>
                              Ship with ease
                         </Paragraph>
                         <Paragraph>
                              The sales forecast based on customer behavior and
                              activity on Price Meter will help you stock up
                              with the required products and ship it to the
                              given destination with ease an convenience.
                         </Paragraph>
                    </StepsCard>
                    <StepsCard style={{ height: "300px" }}>
                         <Text>4</Text>
                         <Paragraph style={{ color: "#F7941D" }}>
                              Earn Big
                         </Paragraph>
                         <Paragraph>
                              Your growth is our success! We will walk with you
                              step by step, providing full support and
                              commitment to making your business boom!
                         </Paragraph>
                    </StepsCard>
               </CardContainer>
          </Wrapper>
     );
};

const Wrapper = styled.div`
     padding: 5rem;
`;
const HeadingAndText = styled.div``;
const Text = styled.h1`
     color: #455a64;
     font-size: 25px;
`;
const Paragraph = styled.p`
     color: #455a64;
`;
const CardContainer = styled.div`
     display: grid;
     margin-left: 10rem;
     grid-template-columns: 300px 300px;
     gap: 50px;
     align-items: center;
     justify-content: space-around;
`;
const StepsCard = styled.div`
     background-color: #eaeaea;
     height: 250px;
     width: 200px;
     padding: 0.5rem;
`;
export default StepsSection;
