import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ProductUploadForm from "./ProductUploadForm";
import UnVerifiedData from "./UnVerifiedData";

const Dashboard = () => {
     return (
          <div>
               <div
                    style={{
                         width: "100%",
                         height: "50px",
                         display: "flex",
                         alignItems: "center",
                         justifyContent: "space-between",
                         backgroundColor: "#EDEDED",
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
               {/* <ProductUploadForm /> */}
               <UnVerifiedData />
          </div>
     );
};

export default Dashboard;
