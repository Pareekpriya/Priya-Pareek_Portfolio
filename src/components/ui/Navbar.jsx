import About from '@/Pages/About';
import Home from '@/Pages/Home';
import { Button, Box } from '@chakra-ui/react';
import React, { useState } from 'react'

function Navbar() {
  const [activeComponent, setActiveComponent] = useState("Home");

  const renderComponent = ()=>{
    switch (activeComponent) {
      case "Home":
        return <Home/>
      case "About":
        return <About/>
      default:
        return <Home/>    
    }
  };
  return (
      <Box>
        <Button onClick={()=>setActiveComponent("Home")}>
          Home
          </Button>
          <Button onClick={()=>setActiveComponent("About")}>
            About
          </Button>
        <Box>{renderComponent()}</Box>  
        </Box>
  )
     
  }

export default Navbar
