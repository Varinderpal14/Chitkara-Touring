import React from 'react'; // Import React
import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import ownPic from '../assets/own pic.jpg';
import varinder from '../assets/varinder.jpeg';
import vanshika from '../assets/dhiman.jpeg';
import varsha from '../assets/varsha.jpeg';

const testimonials = [
  {
    name: 'Vansh Bhargava',
    role: 'Chairperson ACM',
    content:
      'Booking with Travel Wanderlust was the best decision I made for my vacation. Their website is user-friendly and packed with fantastic choices. Their customer service team went above and beyond to assist me in every way. Thanks to them, I had an unforgettable journey!',
    avatar:
    ownPic,
  },
  {
    name: 'Varinderpal singh',
    role: 'President IE(I)',
    content:
      "I'm a frequent traveler, and Travel Wanderlust has become my go-to for planning trips. Their website simplifies the booking process, and their customer service is consistently outstanding. Trust me, if you want a seamless and enjoyable travel experience, choose travel Wanderlust!",
    avatar:
    varinder,
  },
  {
    name: 'Vanshika Dhiman',
    role: 'Social media head',
    content:
      "I stumbled upon Travel Wanderlust while searching for my next adventure, and I'm so glad I did! Their website made it a breeze to find the perfect vacation options. The customer service team was top-notch, and their recommendations truly elevated my travel experience. I can't wait to book with them again!",
    avatar:
     vanshika
  },
  {
    name: 'Varsha',
    role: 'Student',
    content:
      'Travel Wanderlust made planning my vacation a delight. Their website is user-friendly, offering a variety of options. The customer service was exceptional – responsive and knowledgeable. Thanks to them, I had an unforgettable trip. I wholeheartedly recommend Travel Wanderlust for your travel needs!',
    avatar:
      varsha
  },
];

const backgrounds = [
  `url("data:image/svg+xml, ...")`,
  `url("data:image/svg+xml, ...")`,
  `url("data:image/svg+xml, ...")`,
  `url("data:image/svg+xml, ...")`,
];

function TestimonialCard(props) {
  const { name, role, content, avatar, index } = props;
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
        backgroundSize: 'cover',
        backgroundImage: backgrounds[index % 4],
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 4],
      }}
    >
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}
      >
        <chakra.p
          fontFamily={'Inter'}
          fontWeight={'medium'}
          fontSize={'15px'}
          pb={4}
        >
          {content}
        </chakra.p>
        <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
          {name}
          <chakra.span
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={'gray.500'}
          >
            {' '}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      {/* <Avatar
        src={avatar}
        height={'80px'}
        width={'80px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      /> */}
      <div className='flex flex-col justify-center items-center p-4 w-full'>
        <img src={avatar} alt="" className="w-[100px] h-[100px] rounded-full " />
      </div>
    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}
    >
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h3
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          fontSize={20}
          textTransform={'uppercase'}
          color={'purple.400'}
        >
          People love us
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}
        >
          You&apos;re in good company
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'70%'}
          fontFamily={'Inter'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.500', 'gray.400')}
        >
          See why over{' '}
          <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
            150,000+
          </chakra.strong>{' '}
          influencers use Travel Wanderlust to manage their trips and enjoy it
          to the fullest !
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={'20'}
        mt={16}
        mb={16}
        mx={'auto'}
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard key={index} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <Box></Box>
    </Flex>
  );
}
