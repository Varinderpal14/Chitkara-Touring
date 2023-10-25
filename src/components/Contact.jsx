import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Heading,
  Flex,
  Image,
} from '@chakra-ui/react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log(formData);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Flex p={4}>
      <Box flex="1" mr={4}>
        <Heading as="h1" mt="20" marginLeft="20" mb={12}>
          Contact Us
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" ml="3" mt="50" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="email" ml="3" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl id="message" ml="3" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="purple" ml="3" variant="solid">
            Submit
          </Button>
        </form>
      </Box>
      <Box flex="1" ml={4}>
        <Image
          src={require('../assets/virtual-assistant.png')}
          alt="Contact Us"
          objectFit="fit"
          width="100%"
          height="100%"
        />
      </Box>
    </Flex>
  );
}

export default Contact;
