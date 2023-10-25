import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Divider,
  Image,
  Flex,
} from '@chakra-ui/react';

// Define a sample blog post data structure
const sampleBlogPosts = [
  {
    id: 1,
    title: 'The Most Optimal Way Of Travel',
    content:
      'Craft your perfect itinerary with Trip Planner AI. Our advanced algorithms take into account your selected sights, dining, and lodging preferences to create the optimal travel plan tailored just for you.',
    imageUrl: require('../assets/product1-removebg-preview.png'), // Update the image URL
  },
  {
    id: 2,
    title: 'Get Inspired by Others Journeys',
    content:
      'Extract valuable travel insights from Instagram reels and TikToks, explore the mentioned sights, and effortlessly include them in your own adventure with Trip Planner AI.',
    imageUrl: require('../assets/product2-removebg-preview.png'), // Replace with actual image URL
  },
  // Add more sample blog posts as needed
];

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API or backend
    setBlogPosts(sampleBlogPosts);
  }, []);

  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1" mb="20" marginTop={-5}>
        Blog Posts
      </Heading>
      {blogPosts.map((post, index) => (
        <Box key={post.id} mb={index === blogPosts.length - 1 ? '0' : '10'}>
          <Flex flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}>
            <Box flex="1">
              <Heading as="h2" mt="20" fontSize="xl">
                {post.title}
              </Heading>
              <VStack mt="8" spacing="2" align="start">
                <Text>{post.content}</Text>
              </VStack>
            </Box>
            <Box w="400px">
              <Image src={post.imageUrl} alt={post.title} />
            </Box>
          </Flex>
        </Box>
      ))}
      <Divider mt="4"/> {/* Adjust the margin-top of the Divider */}
    </Container>
  );
};

export default BlogPage;
