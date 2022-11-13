import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { stateList } from "./state";

const initialState = {
     fullName: "",
     lastName: "",
     phone: "",
     email: "",
     businessName: "",
     address1: "",
     address2: "",
     city: "",
     state: "",
     pin: "",
     country: "",
};
const RegistrationForm = () => {
     const [formData, setFormData] = useState(initialState);
     const handleChange = (event) => {
          const { name, value } = event.target;
          const val = name === "phone" ? Number(value) : value;
          setFormData({ ...formData, [name]: val });
     };

     const handleSubmit = () => {
          console.log(formData);
          setFormData({
               fullName: "",
               lastName: "",
               phone: "",
               email: "",
               businessName: "",
               address1: "",
               address2: "",
               city: "",
               state: "",
               pin: "",
               country: "",
          });
     };

     const {
          fullName,
          lastName,
          phone,
          email,
          businessName,
          address1,
          address2,
          city,
          state,
          pin,
          country,
     } = formData;

     return (
          <Wrapper>
               <Header>
                    <Text>VENDOR REGISTRATION FORM</Text>
               </Header>
               <Title>
                    Already a HappyCart vendor? Please{" "}
                    <Link to="/marchentLogin">click here</Link> to login
               </Title>
               <Form>
                    <Input
                         style={{ width: "250px" }}
                         placeholder="First Name"
                         name="fullName"
                         value={fullName}
                         onChange={handleChange}
                    />{" "}
                    <Input
                         style={{ width: "300px" }}
                         placeholder="Last Name"
                         name="lastName"
                         value={lastName}
                         onChange={handleChange}
                    />
                    <Input
                         type={"number"}
                         placeholder="Phone Number"
                         name="phone"
                         value={phone}
                         onChange={handleChange}
                    />
                    <Input
                         type={"email"}
                         placeholder="Email"
                         name="email"
                         value={email}
                         onChange={handleChange}
                    />
                    <Input
                         type={"text"}
                         placeholder="Business Name"
                         name="businessName"
                         value={businessName}
                         onChange={handleChange}
                    />
                    <Input
                         type={"text"}
                         placeholder="Address 1"
                         name="address1"
                         value={address1}
                         onChange={handleChange}
                    />
                    <Input
                         type={"text"}
                         placeholder="Address 2"
                         name="address2"
                         value={address2}
                         onChange={handleChange}
                    />
                    <Input
                         type={"text"}
                         placeholder="City"
                         name="city"
                         value={city}
                         onChange={handleChange}
                    />
                    <Select
                         name="state"
                         required
                         placeholder="Select State"
                         value={state}
                         onChange={handleChange}
                    >
                         {stateList.map((item, index) => (
                              <option key={index} value={item.value}>
                                   {item.label}
                              </option>
                         ))}
                    </Select>
                    <Input
                         type={"number"}
                         placeholder="Pin"
                         required
                         name="pin"
                         value={pin}
                         onChange={handleChange}
                    />
                    <Input
                         type={"text"}
                         placeholder="Country"
                         name="country"
                         required={true}
                         value={country}
                         onChange={handleChange}
                    />
                    <Title>Have you sold online before?</Title>
                    <Title>
                         Do you have digital product information ready?
                    </Title>
               </Form>
               <Button onClick={() => handleSubmit()}>SUBMIT</Button>
          </Wrapper>
     );
};
const Wrapper = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     height: 95vh;
     justify-content: space-between;
`;
const Header = styled.div`
     border-bottom: 2px solid #455a64;
     width: 650px;
`;
const Text = styled.h1`
     color: #455a64;
     font-size: 25px;
     margin-top: 50px;
`;
const Form = styled.div``;
const Input = styled.input`
     border: none;
     width: 550px;
     height: 40px;
     border-bottom: 2px solid #455a64;
`;
const Select = styled.select`
     border: none;
     width: 550px;
     height: 40px;
     border-bottom: 2px solid #455a64;
`;

const Title = styled.p`
     text-align: left;
     margin-left: 63px;
`;
const Button = styled.button`
     width: 200px;
     height: 40px;
     background-color: #f7941d;
     border: none;
     color: white;
`;
export default RegistrationForm;
