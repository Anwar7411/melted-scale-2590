// import React, { Component } from "react";
// import Slider from "react-slick";
import { Button, Flex, Heading, Image } from "@chakra-ui/react";

// export default class AdaptiveHeight1 extends Component {
//   render() {
//     var settings = {
//       className: "",
//       dots: true,
//       autoplay: true,
//       speed: 2000,
//       autoplaySpeed: 2000,
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       adaptiveHeight: true
//     };
//     return (
//       <div>
//         <Flex >
//         <Heading className="heading" pr="83%" size={"xl"} >Featured</Heading>
//         </Flex>
//         <Slider {...settings}>
//           <div>
//             <Image src="https://d64lkarmo2mrq.cloudfront.net/img/as_seen_on/medium.jpg"/>
//             <Heading size="xs" color={"#333333"}>FLair Explorer</Heading>
//             <Heading size="xs" color={"#455A64"}>E-commerce Inside the Startup Ecosystem in India</Heading>
//           </div>
//           <div>
//             <Image src="https://d64lkarmo2mrq.cloudfront.net/img/as_seen_on/medium.jpg"/>
//             <Heading size="xs" color={"#333333"}>FLair Explorer</Heading>
//             <Heading size="xs" color={"#455A64"}>E-commerce Inside the Startup Ecosystem in India</Heading>
//           </div>
//           <div>
//             <Image src="https://d64lkarmo2mrq.cloudfront.net/img/as_seen_on/medium.jpg"/>
//             <Heading size="xs" color={"#333333"}>FLair Explorer</Heading>
//             <Heading size="xs" color={"#455A64"}>E-commerce Inside the Startup Ecosystem in India</Heading>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
            <div>
                <Image  src="https://d64lkarmo2mrq.cloudfront.net/img/as_seen_on/medium.jpg"/>
                <Heading size="xs" color={"#333333"}>FLair Explorer</Heading>
                <Heading size="xs" color={"#455A64"}>E-commerce Inside the Startup Ecosystem in India</Heading>
           </div>
           <div>
                <Image src="https://d64lkarmo2mrq.cloudfront.net/img/as_seen_on/medium.jpg"/>
                <Heading size="xs" color={"#333333"}>FLair Explorer</Heading>
                <Heading size="xs" color={"#455A64"}>E-commerce Inside the Startup Ecosystem in India</Heading>
           </div>
           <div>
                <Image src="https://d64lkarmo2mrq.cloudfront.net/img/as_seen_on/medium.jpg"/>
                <Heading size="xs" color={"#333333"}>FLair Explorer</Heading>
                <Heading size="xs" color={"#455A64"}>E-commerce Inside the Startup Ecosystem in India</Heading>
           </div>
          
        </Slider>
      </div>
    );
  }
}