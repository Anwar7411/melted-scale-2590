import React from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import Menu from "../components/Menu";

const Admindashboard = () => {
     return (
          <Wrapper>
               <LeftMenu>
                    <Menu />
               </LeftMenu>
               <InventryDisplay>
                    <Dashboard />
               </InventryDisplay>
          </Wrapper>
     );
};

const Wrapper = styled.div`
     margin: auto;
     display: flex;
     justify-content: space-between;
     margin-top: 150px;
`;
const LeftMenu = styled.div`
     align-items: left;
     width: 20%;
`;
const InventryDisplay = styled.div`
     width: 100%;
`;

export default Admindashboard;
