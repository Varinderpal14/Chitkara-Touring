import React, { useState } from 'react';
import { Button, Heading } from '@chakra-ui/react';
import CardCustom from './CardCustom';
import { data } from '../database/data';

export default function Services() {
  const [numCardsToShow, setNumCardsToShow] = useState(3);
  const handleShowMore = () => {
    setNumCardsToShow(prev => prev + 3);
  };
  return (
    <div className="w-full md:pt-12 pt-6 pb-10">
      <Heading
        textTransform={'uppercase'}
        py={'2'}
        w={'fit-content'}
        borderBottom={'2px solid purple'}
        m={'auto'}
        id="services"
      >
        Our Services
      </Heading>
      <div className="overflow-hidden w-full">
        <div className="w-full mt-6 px-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {data.slice(0, numCardsToShow).map((card, index) => (
            <CardCustom key={index} data={card} />
          ))}
        </div>
        {numCardsToShow < data.length && (
          <Button onClick={handleShowMore} my={4} mx="auto" display="block">
            Show More
          </Button>
        )}
      </div>
    </div>
  );
}
