import { Box, Button, Grid, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import {FaInstagramSquare} from "react-icons/fa"
import{BsYoutube} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import {TbBrandMeta} from "react-icons/tb"
import "./Footer.css"
const Footer = () => {
  return (
    <Box width={"100%" } color="blue.100" bg="blue.100">
      <Grid ml="5%" textAlign={"left"} templateColumns='repeat(5, 1fr)' gap={8}>
        <ul><Heading color={"#f3921f"} size={"s"}>OUR POLICIES</Heading>
        <li><Heading color="#666" size={"xs"}>Covid-19 Precautions</Heading></li>
        <li><Heading color="#666" size={"xs"}>Our Promise</Heading></li>
        <li><Heading color="#666" size={"xs"}>Terms & Conditions</Heading></li>
        <li><Heading color="#666" size={"xs"}>Customs tariffs and fees</Heading></li>
        <li><Heading color="#666" size={"xs"}>Privacy Policy</Heading></li>
        </ul>
        
        <ul><Heading  color={"#f3921f"} size={"s"}>CORPORATE</Heading>
        <li><Heading color="#666" size={"xs"}>Sell With Us</Heading></li>
        <li><Heading color="#666" size={"xs"}>Career Opportunities</Heading></li>
        <li><Heading color="#666" size={"xs"}>Our Blog</Heading></li>
        <li><Heading color="#666" size={"xs"}>Sitemap</Heading></li>
        
        </ul>

        <ul><Heading  color={"#f3921f"} size={"s"}>HELP</Heading>
        <li><Heading color="#666" size={"xs"}>How MeanBuy Works </Heading></li>
        <li><Heading color="#666" size={"xs"}>My orders</Heading></li>
        <li><Heading color="#666" size={"xs"}>Exchanges,Returns and Refunds</Heading></li>
        <li><Heading color="#666" size={"xs"}>Contacts Us</Heading></li>
        <li><Heading color="#666" size={"xs"}>FAQ</Heading></li>
        
        </ul>


        <ul><Heading  color={"#f3921f"} size={"s"}>SELL WITH US</Heading>
        <li><Heading color="#666" size={"xs"}>General Information </Heading></li>
        <li><Heading color="#666" size={"xs"}>Signup</Heading></li>
        </ul>

        <Grid templateRows='repeat(3, 1fr)' gap={3}>
          <InputGroup mt="5%" ml="-5%" bg={"white"} size='md'>
          <Input pr='4.5rem'
            // type={show }
            placeholder='Your Email Address'
          />
          <InputRightElement width='4.5rem'>
              <Button color={"white"} bg="#f3921f" h='2.5rem' size='sm' >
              {"Subscribe"}
             </Button>
            </InputRightElement>
          </InputGroup>
          <Grid templateColumns='repeat(4, 1fr)' gap={1}>
            <FaInstagramSquare color='blue' className='social'/>
            <BsYoutube color="red" className='social'/>
            <AiFillLinkedin color="blue" className='social'/>
            <TbBrandMeta color="blue" className='social'/>
            
          </Grid>


        </Grid>

      </Grid>
      <hr />

      <Heading ml="2%" textAlign={"left"} color={"#f3921f"} size={"s"} >Meanbuy Is Your One Stop Destination For Online Shopping</Heading>
      <Heading ml="2%" textAlign={"left"} color="#666" size={"xs"} >Meanbuy is a comprehensive platform for you to choose how you shop, whether it is buying instantly, waiting to save or to pick up your order from the store after freezing it.

Everyone will agree that it is not easy to go down to the market in massive traffic, driving through crowds, all striving for the same trendy clothing, expecting in line to try on the picked up items in the trial rooms, and finally deciding on the product you buy. Some people like to personally analyze the product before purchasing it in the store. Although some people do not like to shop online, others beg to differ by using the internet to do things. For all you internet enthusiasts who like online shopping,</Heading>
    <Heading ml="2%" textAlign={"left"} color={"#f3921f"} size={"s"}>Get The Best Of Your Online Shopping Experience </Heading>
    <Heading ml="2%" textAlign={"left"} color="#666" size={"xs"}> Keeping mind the fact that everything is just a tap away in today's world, fashion and clothing have no escape from the cyberspace. Online shopping is made easier with various categories and filters that let you get the best result of what you're looking for. At Meanbuy.com we specialize in categorizing the required fields as per your convenience to provide you the best online shopping experience. Categories like Online shopping for kids, online shopping for men, online shopping for women, online shopping for accessories, etc. is curated to make this experience even more convenient. Find the Best Online Shopping in Hyderabad only at Meanbuy.</Heading>
    <Heading ml="2%" textAlign={"left"} color={"#f3921f"} size={"s"}>Meanbuy Let You choose At Your Convenience</Heading>
    <Heading ml="2%" textAlign={"left"} color="#666" size={"xs"}>What if you belong to the former kind, where you like to buy the product from the shop after analyzing it personally? But don't want to miss out on a fantastic product in the process? We got your back! At Meanbuy.com, you can freeze the product and pick up from your neighboring store without the worry of missing the product. Another additional feature of this website is, you can wait and save on the products you like. </Heading>
    </Box>
  )
}

export default Footer