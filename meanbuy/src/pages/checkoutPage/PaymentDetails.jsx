import React from "react";

const PaymentDetails = ({ handleSubmit }) => {
     return (
          <div>
               <div style={{ display: "flex", flexDirection: "row" }}>
                    <div className="paymentDetails">
                         <img
                              style={{ width: "100px" }}
                              src="https://thumbs.dreamstime.com/b/truck-cart-envelope-mail-postal-service-vector-illustration-design-truck-cart-envelope-mail-postal-service-167530835.jpg"
                              alt="CashOnDelivery"
                         />
                         <p>Cash on Delivery (COD)</p>
                    </div>
                    <div className="paymentDetails">
                         <img
                              style={{ width: "100px" }}
                              src="https://www.moodlemonkey.com/wp-content/uploads/2020/01/how-it-works-icon2-1.png"
                              alt="credid/Debit Card"
                         />
                         <p>credid/Debit Card</p>
                    </div>
                    <div className="paymentDetails">
                         <img
                              style={{ width: "100px" }}
                              src="https://www.svgrepo.com/show/260684/payment-method-credit-card.svg"
                              alt="Net Banking"
                         />
                         <p>Net Banking</p>
                    </div>
                    <div className="paymentDetails">
                         <img
                              style={{ width: "100px" }}
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3W5wALJsb-aUGMGHoziH9CJe4Q3GQBOLPqg&usqp=CAU"
                              alt="Emi"
                         />
                         <p>EMI</p>
                    </div>
                    <div className="paymentDetails">
                         <img
                              style={{ width: "100px" }}
                              src="https://products.security.gallagher.com/security/medias/1200Wx1200H-Access-Product-Image-Placeholder?context=bWFzdGVyfGltYWdlc3wxODAzNnxpbWFnZS9qcGVnfGg5OC9oYzAvMTA3MTEzNTI4MzYxMjYvMTIwMFd4MTIwMEhfQWNjZXNzIFByb2R1Y3QgSW1hZ2UgUGxhY2Vob2xkZXJ8YTJiZTc4YjNiM2NjY2I5Zjg0NjgyZjI0ZTRmNWYwZjlmOTRjMTg3ZWM0YzdkOTMxN2JhZGE0NjczOGQ2OGNhYQ"
                              alt="UPI"
                         />
                         <p>UPI</p>
                    </div>
                    <div className="paymentDetails">
                         <img
                              style={{ width: "100px" }}
                              src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2020-03/simpl.jpg"
                              alt="Simpl Pay"
                         />
                         <p>Simpl Pay</p>
                    </div>
               </div>
               <button
                    style={{
                         backgroundColor: "orange",
                         color: "white",
                         border: "none",
                    }}
                    onClick={() => handleSubmit()}
               >
                    {" "}
                    Place Order
               </button>
          </div>
     );
};

export default PaymentDetails;
