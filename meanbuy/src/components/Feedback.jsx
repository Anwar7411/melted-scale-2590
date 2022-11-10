import React from "react";
import styled from "styled-components";

const Feedback = () => {
     return (
          <Wrapper>
               <Heading>Contact Us</Heading>
               <Paragraph>
                    We're all about doing what's best for our customers. If you
                    think we can do something more, we're all ears!
               </Paragraph>
               <Paragraph>
                    We'd love to hear from you with any questions, comments, or
                    suggestions you may have.
               </Paragraph>
               <Paragraph>
                    Just fill in the form below with what you'd like to tell us,
                    and we'll get back to you within 24 hours! <br /> or You can
                    email us at contact@meanbuy.in or
               </Paragraph>
               <Paragraph>Whatsapp us at +91 7093427583</Paragraph>
               <Paragraph>
                    If you'd like to come by or mail us at our head office is at
                    the following address:
               </Paragraph>
               <Paragraph>
                    Address: Flat No.1, 11-4-637/1, Moghal Chambers, A.C Guard,
                    Hyderabad, Telangana, 500004
               </Paragraph>
               <Paragraph>
                    Please make sure to call the number above to make an
                    appointment beforehand so we can properly welcome you!
               </Paragraph>
               <Paragraph style={{ margin: "50px auto", fontWeight: "bold" }}>
                    HappyCart.com takes data protection very serious. If, for
                    any reason, you would like your personal data deleted,
                    please reach out via the form below.
               </Paragraph>
               <Label>Name:</Label>

               <Input />

               <Label>Email Address:</Label>

               <Input />
          </Wrapper>
     );
};

const Wrapper = styled.div`
     width: 60%;
     display: flex;
     flex-direction: column;
`;
const Heading = styled.h1`
     text-align: left;
     color: #455a64;
`;
const Paragraph = styled.p`
     text-align: left;
`;
const Input = styled.input`
     border: 1px solid #ccc;
     width: 60%;
     height: 40px;
`;
const Label = styled.label`
     text-align: left;
     margin-top: 50px;
`;

export default Feedback;
