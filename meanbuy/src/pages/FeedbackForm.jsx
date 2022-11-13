import React from "react";
import styled from "styled-components";
import Feedback from "../components/Feedback";
import FeedbackMenu from "../components/FeedbackMenu";

const FeedbackForm = () => {
     return (
          <Wrapper >
               <FeedbackMenu />
               <Feedback />
          </Wrapper>
     );
};

const Wrapper = styled.div`
     width: 80%;
     margin: auto;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 5rem;
`;

export default FeedbackForm;
