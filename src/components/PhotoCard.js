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

function parseIsoDatetime(dtstr) {
  var dt = dtstr.split(/[: T-]/).map(parseFloat);
  return new Date(
    dt[0],
    dt[1] - 1,
    dt[2],
    dt[3] || 0,
    dt[4] || 0,
    dt[5] || 0,
    0
  );
}

const PhotoCard = ({
  title,
  imageURL,
  url,
  publishedAt,
  description,
  author,
  isDark,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      display="flex"
      flexDir="column"
      gap={6}
      maxW={1000}
      maxH={600}
      justifyContent="center"
      bg={isDark ? "blackAlpha.500" : "red.400"}
      p={10}
      rounded="3xl"
      objectFit="contain"
      boxShadow="2xl"
      onClick={onOpen}
      cursor="pointer"
      _hover={{
        bg: isDark ? "blackAlpha.700" : "red.600",
        border: "1px solid white",
        p: 12,
      }}
      transition="0.2s"
      color="white"
    >
      <Text fontSize="xl">{title}</Text>
      <Image src={imageURL} />
      <Box display="flex" gap={4}>
        <Tag p={2} fontSize="small" color="white" bg="inherit" border="2px">
          {new Date(publishedAt).toISOString().slice(0, 10)}
        </Tag>
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

export default PhotoCard;
