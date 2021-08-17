import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState('');
  // TODO MODAL USEDISCLOSURE

  // TODO SELECTED IMAGE URL STATE

  function handleImageClick(url: string) {
    setIsOpen(true);
    setSelectedUrl(url);
  }

  function handleModalClose() {
    setIsOpen(false);
  }

  return (
    <>
      <SimpleGrid spacingX={10} spacingY={10} minChildWidth="240px">
        {cards &&
          cards.map((image, index) => {
            return (
              <Card
                data={image}
                key={index}
                viewImage={url => handleImageClick(url)}
              ></Card>
            );
          })}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        onClose={handleModalClose}
        imgUrl={selectedUrl}
      />
    </>
  );
}
