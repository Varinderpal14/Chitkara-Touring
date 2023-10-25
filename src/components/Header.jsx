import React from 'react'

import {Drawer, DrawerBody, DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure,VStack, HStack, Box} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from "react-icons/bi"


 

const Header = () => {

  const {isOpen,onOpen,onClose} = useDisclosure()
  return (
    <Box bgColor={'whiteAlpha.900'}>

    {/* this is Hamburger Button  */}
    <Button
    zIndex={'overlay'}  //to make it visible over other divs or images
    pos={'fixed'}
    top={'4'}
    left={'4'}
    colorScheme='purple'
    p={'0'}
    w={'10'}
    h={'10'}
    borderRadius={'full'}
    onClick={onOpen}
    >
      {/* BiMenuAltLeft is navbar(Hamburger) icon  */}
      <BiMenuAltLeft size={'20'}/>
    </Button>

    {/* Drawer is side navigation bar  */}
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>   
      <DrawerOverlay>

        <DrawerContent>

          <DrawerCloseButton/>

          <DrawerHeader>Travel Wanderlust</DrawerHeader>
          <DrawerBody>
            {/* Stack is a div pre-defined as stack in chakra ui and VStack is same in vertical direction */}
            <VStack alignItems={'flex-start'}>

            <Link to={"/"}>

              {/* onClick = {onClick} is used to auto close the side nav bar or drawer on clicking a particular button of a path */}
              <Button onClick={onClose} variant={"ghost"}  colorScheme='purple'>
                Home
              </Button></Link>

              

              

              

              <Link to={"/services"}>
              <Button onClick={onClose} variant={"ghost"}  colorScheme='purple'>
                Services
              </Button></Link>

              <Link to={"/blog"}>
              <Button onClick={onClose} variant={"ghost"}  colorScheme='purple'>
                Blog
              </Button></Link>

              <Link to={"/testimonials"}>
              <Button onClick={onClose} variant={"ghost"}  colorScheme='purple'>
                Testimonials
              </Button></Link>

              <Link to={"/contact"}>
              <Button onClick={onClose} variant={"ghost"}  colorScheme='purple'>
                Contact
              </Button></Link>
            </VStack>

            {/* HStack is in Horizontal Direction */}
            <HStack pos={'absolute'} bottom={'10'} left={'4'}>

            <Link to={'/login'}>
            <Button onClick={onClose} colorScheme='purple'>
                Login
              </Button>
              </Link>

              <Link to={'/signup'}>
              <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                Sign Up
              </Button>
              </Link>
              
            </HStack>


          </DrawerBody>

        </DrawerContent>

      </DrawerOverlay>
    </Drawer>

    </Box>

  )
}

export default Header