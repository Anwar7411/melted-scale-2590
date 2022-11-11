import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams, useLocation } from 'react-router-dom';
import { getCloths } from '../redux/appreducer/action';
import { Box, Flex, Popover, PopoverTrigger, Button, PopoverContent,
          PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Checkbox, 
          VStack, Radio, Stack, RadioGroup, Grid } from "@chakra-ui/react"
import { useState } from "react"
import ClothProduct from '../components/ClothProduct';

const Clothing = () => {

  const dispatch = useDispatch();
  const cloth = useSelector((store) => store.AppReducer.cloth);
  const location = useLocation();

  const [searchParam, setSearchParam] = useSearchParams();
  const [sortBy, setSortyBy] = useState(searchParam.get("sortBy") || "");
  const [color, setColor] = useState(searchParam.getAll("color") || []);
  const [type, setType] = useState(searchParam.getAll("type") || []);
  const [gender, setGender] = useState(searchParam.getAll("gender") || []);

  const handleFilterColor = (e) => {
    const option = e.target.value;
    let newColor = [...color];
    if (newColor.includes(option)) {
      newColor.splice(newColor.indexOf(option), 1);
    } else {
      newColor.push(option);
    }
    setColor(newColor);
  };

  const handleFilterType = (e) => {
    const option = e.target.value;
    let newType = [...type];
    if (newType.includes(option)) {
      newType.splice(newType.indexOf(option), 1);
    } else {
      newType.push(option);
    }
    setType(newType);
  };

  const handleFilterGender = (e) => {
    const option = e.target.value;
    let newGender = [...gender];
    if (newGender.includes(option)) {
      newGender.splice(newGender.indexOf(option), 1);
    } else {
      newGender.push(option);
    }
    setGender(newGender);
  };

  const handleSortBy = (e) => {
     setSortyBy(e.target.value)
  };

  React.useEffect(() => {
    if (location || cloth.length == 0) {
      const type = searchParam.getAll("type");
      const gender = searchParam.getAll("gender");
      const color = searchParam.getAll("color")
      const quaryParam = {
        params: {
          color: color,
          type: type,
          gender: gender,
          _sort: searchParam.get("sortBy") && "price",
          _order: searchParam.get("sortBy")
        }
      };
      dispatch(getCloths(quaryParam))
    }
  }, [location.search])

  console.log("cloth",cloth)
  React.useEffect(() => {
    const params = {};
    color && (params.color = color);
    type && (params.type = type);
    gender && (params.gender = gender);
    sortBy && (params.sortBy = sortBy);
    setSearchParam(params)
  }, [color, type, gender,sortBy])
  return (
    <Flex gap={100} w="94%" m="auto">
      <Box>
      <VStack>
        <Popover>
          <PopoverTrigger>
            <Button>Color</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
            <VStack>
             <Checkbox colorScheme='red' defaultChecked={color.includes("Red")} value="Red" onChange={handleFilterColor}>Red</Checkbox>
             <Checkbox colorScheme='green' defaultChecked={color.includes("Green")} value="Green" onChange={handleFilterColor}>Green</Checkbox>
             <Checkbox colorScheme='gray' defaultChecked={color.includes("Grey")} value="Grey" onChange={handleFilterColor}>Grey</Checkbox>
            </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Button>Type</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
            <VStack>
             <Checkbox colorScheme='red' defaultChecked={type.includes("t-shirt")} value="t-shirt" onChange={handleFilterType}>T-Shirt</Checkbox>
             <Checkbox colorScheme='red' defaultChecked={type.includes("Shirt")} value="Shirt" onChange={handleFilterType}>Shirt</Checkbox>
            </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Button>Gender</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
            <VStack>
             <Checkbox colorScheme='red' defaultChecked={gender.includes("Men")} value="Men" onChange={handleFilterGender}>Male</Checkbox>
             <Checkbox colorScheme='red' defaultChecked={gender.includes("Female")} value="Female" onChange={handleFilterGender}>Female</Checkbox>
            </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
 
        <Popover>
          <PopoverTrigger>
            <Button>Sort</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <RadioGroup gap={3}>
             <Radio size='md' name="sortBy" defaultChecked={sortBy=="asc"} value="asc" colorScheme='red' onChange={handleSortBy} >Ascending</Radio>
             <Radio size='md' name="sortBy"  defaultChecked={sortBy=="desc"} value="desc" colorScheme='red' onChange={handleSortBy} >Descending</Radio>
            </RadioGroup>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </VStack>
      </Box>


      <Box>
      <Grid  gap={5} templateColumns={{base: "repeat(1,1fr)",  lg: "repeat(4,1fr)", md:"repeat(3,1fr)",sm:"repeat(2,1fr)"}} >
        {cloth && cloth?.map((item)=>(    
            <ClothProduct item={item} key={item.id} />
        )) }
      </Grid>
      </Box>
      
    </Flex>
  )
}

export default Clothing