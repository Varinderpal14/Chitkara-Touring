import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const CardCustom = ({ data }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg="white"
      p={6}
      m={4}
      transition="transform 0.3s"
      _hover={{ transform: 'scale(1.05)' }}
    >
      <Box>
        <img
          src={data?.img}
          alt="Card Image"
          objectFit="cover"
          mb={4}
          borderRadius="md"
          className="w-[720px] h-[300px]"
        />
        <div className="flex flex-row justify-between w-full">
          <Text fontSize="xl" color={'black'} fontWeight="bold" mb={2}>
            {data?.title}
          </Text>
          <Text fontSize="xl" color={'black'} fontWeight="bold" mb={2}>
            {data?.title2}
          </Text>
        </div>
        <Text color="gray.500">{data?.text}</Text>
      </Box>
    </Box>
  );
};

export default CardCustom;
