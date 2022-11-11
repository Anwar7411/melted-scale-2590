import React from 'react'
import style from "styled-components"
import FilterSort from '../components/FilterSort'
import Watches from '../components/Watches'
const Watchpage = () => {
    
  return (
    <div>
        
    <Wrapper>
    <WrapperFilterSort>
        <FilterSort/>
    </WrapperFilterSort>
    <WrapperWatches>
        <Watches/>
    </WrapperWatches>
</Wrapper>
</div>
)
}

const Wrapper=style.div`
border: 1px solid red;
display:flex;
min-height:100vh;
` 
const WrapperFilterSort=style.div`
width:200px;
border:1px solid black
`
const WrapperWatches=style.div
`
border: 1px solid blue;
width:100%;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,max-content));
justify-content:center;
grid-gap:10px;   
`
export default Watchpage


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