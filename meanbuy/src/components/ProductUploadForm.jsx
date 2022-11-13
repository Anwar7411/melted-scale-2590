import { HamburgerIcon } from "@chakra-ui/icons";
import {
     Box,
     Text,
     FormLabel,
     Select,
     Input,
     Stack,
     Textarea,
     Button,
     Image,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
     addProductFailure,
     addProductRequest,
     addProductSuccess,
} from "../redux/dashboardReducer/action";

const initialState = {
     typeofBusiness: "",
     date: "",
     categorySubcategory: "",
     targetAudience: "",
     gst: "",
     title: "",
     productSummary: "",
     summary1: "",
     summary2: "",
     brandDescription: "",
     color: "",
     size: "",
     sku: "",
     stock: "",
     image1: "",
     image2: "",
     minPrice: "",
     yourMinPrice: "",
     yourMaxPrice: "",
     buyNowPrice: "",
     leadTime: "",
     inStorePickup: "",
     weight: "",
     length: "",
     breadth: "",
     height: "",
};

const ProductUploadForm = () => {
     const isLoading = useSelector((state) => state.isLoading);
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const [product, setProduct] = useState(initialState);
     const handleChange = (event) => {
          const { name, value } = event.target;
          const val = name === "minPrice" ? Number(value) : value;
          setProduct({ ...product, [name]: val });
     };
     const addData = (payload) => {
          console.log("payload:", payload);
          dispatch(addProductRequest());
          axios.post(
               "https://json-mooker-server-abc.herokuapp.com/dashboard",
               payload
          )
               .then((res) => {
                    dispatch(addProductSuccess(res.data));
                    navigate("/admindashboard");
               })
               .catch((e) => dispatch(addProductFailure(e)));
     };

     const handleClick = (e) => {
          addData(product);
          setProduct({
               typeofBusiness: "",
               date: "",
               categorySubcategory: "",
               targetAudience: "",
               gst: "",
               title: "",
               productSummary: "",
               summary1: "",
               summary2: "",
               brandDescription: "",
               color: "",
               size: "",
               sku: "",
               stock: "",
               image1: "",
               image2: "",
               minPrice: "",
               yourMinPrice: "",
               yourMaxPrice: "",
               buyNowPrice: "",
               leadTime: "",
               inStorePickup: "",
               weight: "",
               length: "",
               breadth: "",
               height: "",
          });
     };

     const {
          typeofBusiness,
          date,
          categorySubcategory,
          targetAudience,
          gst,
          title,
          productSummary,
          summary1,
          summary2,
          brandDescription,
          color,
          size,
          sku,
          stock,
          image1,
          image2,
          minPrice,
          yourMinPrice,
          yourMaxPrice,
          buyNowPrice,
          leadTime,
          inStorePickup,
          weight,
          length,
          breadth,
          height,
     } = product;

     const handleLogout = () => {
          navigate("/marchentLogin");
     };
     return (
          <>
               <div
                    style={{
                         width: "100%",
                         height: "50px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "space-between",
                         backgroundColor: "#EDEDED",
                          marginTop:"150px"
                    }}
               >
                    <HamburgerIcon boxSize={10} />
                    <div style={{ display: "flex" }}>
                         <button
                              style={{
                                   height: "50px",
                                   textAlign: "center",
                                   backgroundColor: "transprant",
                                   width: "150px",
                                   border: "none",
                              }}
                         >
                              Reset Password
                         </button>
                         <button
                              style={{
                                   height: "50px",
                                   textAlign: "center",
                                   backgroundColor: "transprant",
                                   width: "150px",
                                   border: "none",
                              }}
                              onClick={(e) => handleLogout()}
                         >
                              Logout
                         </button>
                         <div>
                              <Image
                                   w={70}
                                   h={50}
                                   mr={10}
                                   src="https://merchant.meanbuy.in/assets/img/india/logo/smalllogo.png"
                                   alt="img"
                              />
                         </div>
                    </div>
               </div>
               <Box
                    p={10}
                    display="flex"
                    flexDirection={"column"}
                    alignItems={"flex-start"}
               >
                    <Text
                         borderBottom={"1px solid #ccc "}
                         fontSize={30}
                         textAlign={"left"}
                         color={"#F48127"}
                    >
                         Product Upload (Online Form)
                    </Text>
                    <Text textAlign={"left"} color={"#73879C"}>
                         Please Upload the products (currently non-existent on
                         HappyCart.com) you wish to list on HappyCart.com at
                         least 2 business days before the preferred listing
                         date.
                    </Text>

                    <FormLabel>
                         Step 1: Please select whethre you intend to ship the
                         product, have the product available for in store
                         pickup, or both.
                    </FormLabel>
                    <Box width={"200px"} mt={25}>
                         <Select
                              width={"200px"}
                              h={30}
                              name="typeofBusiness"
                              value={typeofBusiness}
                              onChange={handleChange}
                         >
                              <option value="Shipping Only">
                                   Shipping Only
                              </option>
                              <option value="In store pickup only">
                                   In store pickup only
                              </option>
                              <option value="Both">Both</option>
                         </Select>
                    </Box>
                    <FormLabel mt={20}>
                         Step 2: Please enter general product information.
                    </FormLabel>
                    <Box w={"100%"}>
                         <table style={{ width: "100%" }}>
                              <tr>
                                   <th>Posting Date</th>
                                   <th>Category - Subcategory</th>
                                   <th>Brand Name</th>
                                   <th>Target Audience</th>
                                   <th>GST %</th>
                              </tr>
                              <tr>
                                   <td>
                                        <Input
                                             placeholder="Select Date and Time"
                                             size="md"
                                             type="datetime-local"
                                             name="date"
                                             value={date}
                                             onChange={handleChange}
                                        />
                                   </td>
                                   <td>
                                        {" "}
                                        <Select
                                             width={"200px"}
                                             h={30}
                                             name="categorySubcategory"
                                             value={categorySubcategory}
                                             onChange={handleChange}
                                        >
                                             <option value="option1">
                                                  Shipping Only
                                             </option>
                                             <option value="option2">
                                                  In store pickup only
                                             </option>
                                             <option value="option3">
                                                  Both
                                             </option>
                                        </Select>
                                   </td>
                                   <td>
                                        <Input w={"200px"} />
                                   </td>
                                   <td>
                                        <Select
                                             width={"200px"}
                                             h={30}
                                             name="targetAudience"
                                             value={targetAudience}
                                             onChange={handleChange}
                                        >
                                             <option value="Unisex">
                                                  Unisex
                                             </option>
                                             <option value="Men">Men</option>
                                             <option value="Women">
                                                  Women
                                             </option>
                                             <option value="Boys">Boys</option>
                                             <option value="Girls">
                                                  Girls
                                             </option>
                                             <option value="Baby Boys">
                                                  Baby Boys
                                             </option>
                                             <option value="Baby Girl">
                                                  Baby Girl
                                             </option>
                                        </Select>
                                   </td>
                                   <td>
                                        <Input
                                             w={"200px"}
                                             name="gst"
                                             value={gst}
                                             onChange={handleChange}
                                        />
                                   </td>
                              </tr>
                         </table>
                    </Box>
                    <Box
                         mt={10}
                         border={"1px solid #ccc"}
                         w={"100%"}
                         display="flex"
                         flexDirection={"column"}
                         alignItems={"center"}
                    >
                         <Stack>
                              <FormLabel>Title</FormLabel>
                         </Stack>
                         <Stack>
                              <Input
                                   width={"600px"}
                                   name="title"
                                   value={title}
                                   onChange={handleChange}
                              />
                         </Stack>
                         <FormLabel mt={"10"}>Product Summary</FormLabel>

                         <Box>
                              <Textarea
                                   h="250px"
                                   name="productSummary"
                                   value={productSummary}
                                   onChange={handleChange}
                              />
                         </Box>
                         <FormLabel mt={"10"}>
                              Summary (Bullets Points): *Minimum of 2 required
                         </FormLabel>
                         <Box>
                              <Input
                                   name="summary1"
                                   value={summary1}
                                   width={"600px"}
                                   onChange={handleChange}
                              />
                              <Input
                                   name="summary2"
                                   value={summary2}
                                   width={"600px"}
                                   onChange={handleChange}
                              />
                         </Box>
                         <FormLabel mt={"10"}>Brand Description</FormLabel>
                         <Textarea
                              width={"600px"}
                              h="300px"
                              name="brandDescription"
                              value={brandDescription}
                              onChange={handleChange}
                         />
                         <FormLabel mt={20}>
                              Step 3: Please enter product options (if any).
                              *Please upload URL images only. Images uploaded
                              with an option will be associated with that
                              particular option.
                         </FormLabel>
                         <Box mt={5}>
                              <table
                                   style={{ width: "100%", fontSize: "13px" }}
                              >
                                   <tr>
                                        <th style={{ width: "90px" }}>
                                             Color 1 (if any)
                                        </th>
                                        <th> Size 1 (if any)</th>
                                        <th> SKU 1</th>
                                        <th>Stock Qty 1:</th>
                                        <th>Image: 1</th>
                                        <th> Image: 2</th>
                                   </tr>
                                   <tr>
                                        <td>
                                             <Input
                                                  name="color"
                                                  value={color}
                                                  onChange={handleChange}
                                             />
                                        </td>
                                        <td>
                                             <Input
                                                  placeholder=""
                                                  name="size"
                                                  value={size}
                                                  onChange={handleChange}
                                             />
                                        </td>
                                        <td>
                                             {" "}
                                             <Input
                                                  name="sku"
                                                  value={sku}
                                                  onChange={handleChange}
                                             />
                                        </td>
                                        <td>
                                             <Input
                                                  name="stock"
                                                  value={stock}
                                                  onChange={handleChange}
                                             />
                                        </td>

                                        <td>
                                             <Input
                                                  placeholder="Image URL: 1"
                                                  name="image1"
                                                  value={image1}
                                                  onChange={handleChange}
                                             />
                                        </td>
                                        <td>
                                             <Input
                                                  placeholder="Image URL: 2"
                                                  name="image2"
                                                  value={image2}
                                                  onChange={handleChange}
                                             />
                                        </td>
                                   </tr>
                              </table>
                         </Box>
                         <FormLabel mt={20}>
                              Step 4: Please enter product pricing information.
                         </FormLabel>
                         <Box mt={5}>
                              <table
                                   style={{ width: "100%", fontSize: "13px" }}
                              >
                                   <tr>
                                        <th style={{ width: "90px" }}>
                                             Min Price as Listed on MeanBuy
                                             (INR)
                                        </th>
                                        <th>
                                             {" "}
                                             Your Min Price as Listed on MeanBuy
                                             (INR)
                                        </th>
                                        <th>
                                             {" "}
                                             Your Max Price as Listed on MeanBuy
                                             (INR)
                                        </th>
                                        <th>
                                             Buy Now Price for Shipments (INR)
                                        </th>
                                        <th>
                                             Lead Time for Shipments (Days
                                             -e.g.,3)
                                        </th>
                                        <th>In Store Pickup Price (INR)</th>
                                   </tr>
                                   <tr>
                                        <td>
                                             <Input
                                                  placeholder="0"
                                                  type={"number"}
                                                  name="minPrice"
                                                  value={minPrice}
                                                  onChange={handleChange}
                                             />
                                        </td>
                                        <td>
                                             {" "}
                                             <Input
                                                  type={"number"}
                                                  name="yourMinPrice"
                                                  value={yourMinPrice}
                                                  onChange={handleChange}
                                             />
                                        </td>
                                        <td>
                                             <Input
                                                  type={"number"}
                                                  name="yourMaxPrice"
                                                  value={yourMaxPrice}
                                                  onChange={handleChange}
                                             />
                                        </td>
                                        <td>
                                             <Input
                                                  name="buyNowPrice"
                                                  value={buyNowPrice}
                                                  type={"number"}
                                                  onChange={handleChange}
                                             />
                                        </td>
                                        <td>
                                             <Input
                                                  name="leadTime"
                                                  value={leadTime}
                                                  onChange={handleChange}
                                             />
                                        </td>
                                        <td>
                                             <Input
                                                  name="inStorePickup"
                                                  value={inStorePickup}
                                                  onChange={handleChange}
                                             />
                                        </td>
                                   </tr>
                              </table>
                         </Box>
                    </Box>
                    <FormLabel>
                         Step 5: Please enter shipment packaging characteristics
                         (including the box).
                    </FormLabel>
                    <Box mt={10} width={"400px"} display="flex">
                         <Box>
                              <Text>Weight (kg): </Text>
                              <Text>Length (cm):</Text>
                              <Text>Breadth (cm): </Text>
                              <Text>Height (cm)</Text>
                         </Box>
                         <Box width={"100px"}>
                              <Input
                                   h="20px"
                                   name="weight"
                                   value={weight}
                                   onChange={handleChange}
                              />
                              <Input
                                   h="20px"
                                   name="length"
                                   value={length}
                                   onChange={handleChange}
                              />
                              <Input
                                   h="20px"
                                   name="breadth"
                                   value={breadth}
                                   onChange={handleChange}
                              />
                              <Input
                                   h="20px"
                                   name="height"
                                   value={height}
                                   onChange={handleChange}
                              />
                         </Box>
                    </Box>
                    <Button onClick={(e) => handleClick(e)}>
                         Upload Product
                    </Button>
               </Box>
          </>
     );
};

export default ProductUploadForm;
