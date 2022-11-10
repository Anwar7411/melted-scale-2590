import React from "react";
import styled from "styled-components";

const FeedbackMenu = () => {
     return (
          <MenuContainer>
               <Link href="#">Shopping</Link>
               <Link href="#">What is HappyCart</Link>
               <Link href="#">FAQ</Link>
               <Link href="#">Our Promise</Link>
               <Link href="#">Contact Us</Link>
               <Link href="#">Shopping & Returns</Link>
               <Link href="#">Customs tariffs and fees</Link>
               <Link href="#">Privacy Policy</Link>
               <Link href="#">Terms & Conditions</Link>
               <Link href="#">Sitemap</Link>
          </MenuContainer>
     );
};

const MenuContainer = styled.div`
     width: 200px;
     height:400px
     margin:auto;
     text-align:left;
     display:flex;
     flex-direction:column;
     gap:10px;
     font-weight:bold;
     padding:2rem;
     box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;


`;
const Link = styled.a`
     text-decoration: none;
`;

export default FeedbackMenu;
