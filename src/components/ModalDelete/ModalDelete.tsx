import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';

interface ModalDeleteProps {
  isOpen: boolean;
  text: string | number;
  onClose: () => void;
  onDelete: () => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  isOpen,
  text,
  onClose,
  onDelete,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent sx={{ top: '100px' }}>
        <ModalHeader>Delete {text}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Are you sure you want to{' '}
          <Text as="span" color="red.600">
            delete
          </Text>{' '}
          <Text as="span" color="gray.600" fontWeight="semibold">
            {text}
          </Text>
          ?
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="red" onClick={onDelete}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalDelete;
