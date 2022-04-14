import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const NormalCard = ({
  title,
  imageURL,
  description,
  publishedAt,
  author,
  isDark,
  url,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      p={4}
      px={8}
      display="flex"
      flexDir="column"
      minW={500}
      maxW={1300}
      bg={isDark ? "blackAlpha.400" : "orange.300"}
      rounded="3xl"
      boxShadow="2xl"
      onClick={onOpen}
      cursor="pointer"
      transition="0.2s"
      color="white"
      _hover={{
        bg: isDark ? "blackAlpha.600" : "orange.400",
        border: "1px solid white",
        p: 6,
      }}
    >
      <Box display="flex" gap={6} justifyContent="center" alignItems="center">
        <Box>
          <Text marginBottom={4} fontSize="xl">
            {title}
          </Text>
          <Box display="flex" gap={2}>
            <Tag fontSize="small" p={2} color="white" bg="inherit" border="2px">
              {new Date(publishedAt).toISOString().slice(0, 10)}
            </Tag>
          </Box>
        </Box>
        <Image objectFit="contain" src={imageURL} h={40} w={40}></Image>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{description}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              rightIcon={<AiOutlineArrowRight />}
              colorScheme="teal"
              variant="outline"
              onClick={() => window.open(url, "_blank")}
            >
              View Link
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default NormalCard;
