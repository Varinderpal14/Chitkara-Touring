import React, { useRef, useState } from 'react';
import hero from '../assets/hero.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Container,
} from '@chakra-ui/react';
import CardCustom from './CardCustom';
import { data } from '../database/data';

export default function Home() {
  const [_, setInit] = useState();

  const nData = data.slice(0, 6);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <Box>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} p={4}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}
              >
                Travel
              </Text>
              <br />{' '}
              <Text color={'purple.400'} as={'span'}>
                Wanderlust
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Unleash Your Inner Explorer Welcome to Travel Wanderlust, where
              your wanderlust dreams come to life. We're your gateway to
              captivating destinations worldwide. Whether you seek the thrill of
              adventure or the serenity of relaxation, we're here to craft
              tailor-made journeys that match your desires. Our team of seasoned
              travelers and expert guides will lead you to discover the world's
              hidden treasures and iconic landmarks. Let your curiosity guide
              you, and let Travel Wanderlust be your compass on a journey of a
              lifetime.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <a href="#services">
                <Button
                  rounded={'full'}
                  bg={'purple.400'}
                  color={'white'}
                  _hover={{
                    bg: 'purple.500',
                  }}
                >
                  Get Started
                </Button>
              </a>
              <a href="#services">
                <Button rounded={'full'}>About Us</Button>
              </a>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={'Login Image'} objectFit={'cover'} src={hero} />
        </Flex>
      </Stack>

      <Container minHeight={'100vh'} maxWidth={'container.2xl'} p="16">
        {/* w = 'fit-cotent' allocates width according to content like span and border bottom is used for unerline stylinhg here  */}
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'3px solid purple'}
          m={'auto'}
          id="services"
        >
          Deals Of The Day
        </Heading>

        <div className="w-full swiper md:pt-12 pt-6 pb-10 relative">
          <div className="overflow-hidden w-full">
            <div className="w-full mb-6 p-2">
              <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                //   slidesPerView={5}
                //   spaceBetween={20}
                onInit={() => setInit(true)}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                autoplay={{ delay: 4500 }}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                {nData.map((item, ind) => (
                  <SwiperSlide key={ind}>
                    <CardCustom data={item} />
                  </SwiperSlide>
                ))}
                <div className="swiper-nav-btns flex md:px-10 mx-auto md:mt-10 mt-4">
                  <button ref={prevRef}>
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24 5.50049C13.784 5.50049 5.5 13.7825 5.5 24.0005C5.5 34.2165 13.784 42.5005 24 42.5005C34.216 42.5005 42.5 34.2165 42.5 24.0005C42.5 13.7825 34.216 5.50049 24 5.50049Z"
                        stroke="#ba55d3"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26.8847 17.0581L19.9127 24.0001L26.8847 30.9421"
                        stroke="#ba55d3"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button ref={nextRef}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20 38.4996C30.216 38.4996 38.5 30.2176 38.5 19.9996C38.5 9.78363 30.216 1.49963 20 1.49963C9.784 1.49963 1.5 9.78363 1.5 19.9996C1.5 30.2176 9.784 38.4996 20 38.4996Z"
                        stroke="purple"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.1153 26.942L24.0873 20L17.1153 13.058"
                        stroke="purple"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </Container>

      <Container minHeight={'100vh'} maxWidth={'container.2xl'} p="16">
        {/* w = 'fit-cotent' allocates width according to content like span and border bottom is used for unerline stylinhg here  */}
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'4px solid purple'}
          m={'auto'}
          id="services"
        >
          Travel categories
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-4">
                <div class="hover:scale-[1.05] transition-all duration-300 ease-in-out">
                  <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      Art and Culture
                    </h1>
                    <img
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src={require('../assets/varanasi.jpg')}
                      alt="content"
                    />
                    <p class="leading-relaxed mb-3">
                      Explore art and culture worldwide, from ancient traditions
                      to contemporary expressions, adding depth to your travel
                      experiences.
                    </p>
                    <a class="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
                <div class="hover:scale-[1.05] transition-all duration-300 ease-in-out">
                  <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      Wildlife and Nature
                    </h1>
                    <img
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src={require('../assets/south-india-wildlife-sanctuaries.jpg')}
                      alt="content"
                    />
                    <p class="leading-relaxed mb-3">
                      Explore untamed wilderness, witness breathtaking natural
                      wonders, and connect with wildlife on unforgettable nature
                      adventures.
                    </p>
                    <a class="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
                <div class="hover:scale-[1.05] transition-all duration-300 ease-in-out">
                  <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      Hills and Nature
                    </h1>
                    <img
                      class="h-40 rounded w-full object-cover object-center mb-6"
                      src={require('../assets/hills and nature.webp')}
                      alt="content"
                    />
                    <p class="leading-relaxed mb-3">
                      Discover tranquil hillscapes, lush greenery, and serene
                      retreats in nature's embrace on our travel website.
                    </p>
                    <a class="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                      <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        1.2K
                      </span>
                      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          class="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Stack>
      </Container>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white-1000">
                Amazing places to enjoy your travel
              </h1>
              <div class="h-1 w-20 bg-purple-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Embark on a curated adventure to stunning destinations in India
              and beyond. From the serene beaches of Goa to the historic wonders
              of Rajasthan, our selection promises awe-inspiring experiences.
              Discover diverse cultures, landscapes, and cuisines. Your
              extraordinary journey starts here.
            </p>
          </div>
          <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <div class=" p-4 hover:scale-[1.05] transition-all duration-300 ease-in-out">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={require('../assets/goa(720x400).jpg')}
                  alt="content"
                />
                <center>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Goa
                  </h2>
                </center>
                <p class="leading-relaxed text-base">
                  Goa, where sun-kissed beaches, vibrant nightlife, and
                  Portuguese heritage create a unique and enchanting coastal
                  experience.
                </p>
              </div>
            </div>
            <div class=" p-4 hover:scale-[1.05] transition-all duration-300 ease-in-out">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={require('../assets/manali-721x401.jpg')}
                  alt="content"
                />
                <center>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Manali
                  </h2>
                </center>
                <p class="leading-relaxed text-base">
                  Manali, where snow-capped peaks, lush valleys, and adventure
                  opportunities beckon, offering an unforgettable Himalayan
                  retreat.
                </p>
              </div>
            </div>
            <div class=" p-4 hover:scale-[1.05] transition-all duration-300 ease-in-out">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={require('../assets/jaipur-722x402.jpg')}
                  alt="content"
                />
                <center>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Jaipur
                  </h2>
                </center>
                <p class="leading-relaxed text-base">
                  Jaipur, the Pink City, enchants with its royal palaces,
                  vibrant markets, and rich history, creating a captivating
                  blend of tradition and modernity.
                </p>
              </div>
            </div>
            <div class=" p-4 hover:scale-[1.05] transition-all duration-300 ease-in-out">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={require('../assets/kerala-723x403.jpg')}
                  alt="content"
                />
                <center>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Kerala
                  </h2>
                </center>
                <p class="leading-relaxed text-base">
                  Discover Kerala's stunning backwaters, spice-scented hills,
                  and serene beaches for an unforgettable journey in India's
                  tropical paradise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section></section>
    </Box>
  );
}
