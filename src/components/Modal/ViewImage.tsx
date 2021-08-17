import {
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="5xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.900">
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody pt={5} alignSelf="center">
          <Image src={imgUrl} alt="image" />
        </ModalBody>
        <ModalFooter alignSelf="flex-start">
          <Link href={imgUrl}>Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
