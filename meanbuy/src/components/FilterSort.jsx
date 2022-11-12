import { Button, Heading, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import {ChevronDownIcon} from "@chakra-ui/icons"
const FilterSort = () => {
 
  
  const [searchParams,setsearchParams]=useSearchParams();
  const [category,setcategory]=useState(searchParams.getAll("genre")||[])
  const [sortBy,setSortBy]=useState(searchParams.getAll('sortBy')||[])
  // console.log(searchParams.getAll("genre") ||[]);
  
  const handleFilter=(e)=>{
    const option=e.target.value;
    let newcategory=[...category];
    if(newcategory.includes(option)){
      newcategory.splice(newcategory.indexOf(option),1)
    }
    else{
      newcategory.push(option)
    }
    setcategory(newcategory)
  };
  const handleSortBy=(e)=>{
    setSortBy(e.target.value)
  }


  useEffect(()=>{
    const params={}
    category && (params.genre=category);
    sortBy && (params.sortBy=sortBy)
    setsearchParams(params)

  },[category,setsearchParams,sortBy])


  console.log(category)
  
  console.log()


  return (
    <div>
      <Heading color={"grey"} mt="2%" mb="5%" size={"lg"}>Filter</Heading>
      <Menu>
        <MenuButton  as={Button} rightIcon={<ChevronDownIcon />}>
          BRANDS
        </MenuButton>
        <MenuList minWidth={"8.3rem"}>
          <MenuItem>
            <input type="checkbox" value="BENZ AMG" defaultChecked={category.includes("BENZ AMG")} onChange={handleFilter}/>
            <label>BENZ AMG</label>
          </MenuItem>
          <MenuItem>
            <input type="checkbox" value="BOBOBIRD" defaultChecked={category.includes("BOBOBIRD")} onChange={handleFilter}/>
            <label>BOBOBIRD</label>
          </MenuItem>
          <MenuItem>
            <input type="checkbox" value="CURREN" defaultChecked={category.includes("CURREN")} onChange={handleFilter}/>
            <label>CURREN</label>
          </MenuItem>
          <MenuItem>
            <input type="checkbox" value="LIGE"  defaultChecked={category.includes("LIGE")} onChange={handleFilter}/>
            <label>LIGE</label>
          </MenuItem>
          <MenuItem>
            <input type="checkbox" value="MB"  defaultChecked={category.includes("MB")} onChange={handleFilter}/>
            <label>MB</label>
          </MenuItem>
          <MenuItem>
            <input type="checkbox" value="Naviforce"  defaultChecked={category.includes("Naviforce")} onChange={handleFilter}/>
            <label>Naviforce</label>
          </MenuItem>
          <MenuItem>
            <input type="checkbox" value="PD"  defaultChecked={category.includes("PD")} onChange={handleFilter}/>
            <label>PD</label>
          </MenuItem>
          <MenuItem>
            <input type="checkbox" value="SK"  defaultChecked={category.includes("SK")} onChange={handleFilter}/>
            <label>SK</label>
          </MenuItem>
          <MenuItem>
            <input type="checkbox" value="SKMEI"  defaultChecked={category.includes("SKMEI")} onChange={handleFilter}/>
            <label>SKMEI</label>
          </MenuItem>
      </MenuList>
      </Menu>
      
      <Menu >
        <MenuButton mt="10%" w="75%" as={Button} rightIcon={<ChevronDownIcon />}>
          SORT
        </MenuButton>
        <MenuList minWidth={"8.3rem"}>
          <MenuItem>
          <input type="radio" value="asc" name="sortBy" onChange={handleSortBy} defaultChecked={sortBy==='asc'} />
          <label>Ascending</label>
          </MenuItem>
          <MenuItem>
          <input type="radio" value="desc" name="sortBy" onChange={handleSortBy} defaultChecked={sortBy==='desc'} />
          <label>Descending</label>
          </MenuItem>
          </MenuList>
      </Menu>
      
      {/* <h1>Sort</h1>
      <div onChange={handleSortBy}>
        <div>
          <input type="radio" value="asc" name="sortBy" defaultChecked={sortBy==='asc'} />
          <label>Ascending</label>
        </div>
        <div>
          <input type="radio" value="desc" name="sortBy" defaultChecked={sortBy==='desc'} />
          <label>Descending</label>
        </div>
      </div> */}
    
    </div>
  )
}

export default FilterSort