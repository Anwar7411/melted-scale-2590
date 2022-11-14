import { Spinner } from "@chakra-ui/react";
import React from "react";
import style from "styled-components";
import FilterSort from "../components/FilterSort";
import Watches from "../components/Watches";
import { useDispatch, useSelector } from "react-redux";

const Watchpage = () => {
     const isLoading = useSelector((store) => store.AppReducer.isLoading);

     if (isLoading) {
          return <Spinner color='red.500' mb="800px"  mt="200px" ml="50%" />;
        }
      

     return (
          <div>
               <Wrapper>
                    <WrapperFilterSort>
                         <FilterSort />
                    </WrapperFilterSort>
                    <WrapperWatches>
                         <Watches />
                    </WrapperWatches>
               </Wrapper>
          </div>
     );
};

const Wrapper = style.div`
margin-top:10px;
display:flex;
min-height:100vh;
margin-bottom:20px;
padding-top:8%;
`
const WrapperFilterSort = style.div`
width:200px;
`
const WrapperWatches = style.div`
width:100%;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,max-content));
justify-content:center;
margin-top:-50px;
grid-gap:10px;`   

    




export default Watchpage;

// import React from 'react'
// import style from "styled-components"
// import FliterSort from '../components/FliterSort'
// import Watches from '../components/Watches'
// const Watchpage = () => {
//     <h1>Watch</h1>
//   return (
//     <Wrapper>
//         <WrapperFliterSort>
//             <FliterSort/>
//         </WrapperFliterSort>
//         <WrapperWatches>
//             <Watches/>
//         </WrapperWatches>
//     </Wrapper>
//   )
// }

// const Wrapper=style.div`
//  border: 1px solid red;
//  display:flex;
//  min-height:100vh;
//  `
//  const WrapperFliterSort=style.div`
//  width:200px;
//  border:1px solid black
//  `
// const WrapperWatches=style.div
// `
//  border: 1px solid blue;
//  width:100%;
//  display:grid;
//  grid-template-columns:repeat(auto-fit,minmax(300px,max-content));
//  justify-content:center;
//  grid-gap:10px;
// `
// export default Watchpage
