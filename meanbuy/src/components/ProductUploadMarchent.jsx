import styled from "styled-components";
import React from "react";
import ProductUploadForm from "./ProductUploadForm";
import Menu from "./Menu";

const ProductUploadMarchent = () => {
     return (
          <Wrapper>
               <LeftMenu>
                    <Menu />
               </LeftMenu>
               <InventryDisplay>
                    <ProductUploadForm />
               </InventryDisplay>
          </Wrapper>
     );
};

const Wrapper = styled.div`
     margin: auto;
     display: flex;
     justify-content: space-between;
`;
const LeftMenu = styled.div`
     align-items: left;
     width: 20%;
`;
const InventryDisplay = styled.div`
     width: 100%;
`;

export default ProductUploadMarchent;
