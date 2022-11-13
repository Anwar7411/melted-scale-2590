import React from "react";
import styled from "styled-components";
import RegistrationForm from "../components/RegistrationForm";
import StepsSection from "../components/StepsSection";

const VendorRegistrationForm = () => {
     return (
          <Wrapper >
               <LeftSection>
                    <StepsSection />
               </LeftSection>
               <FormSection>
                    <RegistrationForm />
               </FormSection>
          </Wrapper>
     );
};

const Wrapper = styled.div`
     margin: auto;
     width: 90%;
     display: flex;
     justify-content: space-between;
     margin-top:150px;
`;
const LeftSection = styled.div`
     width: 50%;
`;
const FormSection = styled.div`
     width: 50%;
     margin: 0px 0px 220px;
`;

export default VendorRegistrationForm;
