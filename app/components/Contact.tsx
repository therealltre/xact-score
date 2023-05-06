import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import ContactUs from "./ContactUs";

export default function Contact() {
  return (
    <Container
      id="contact"
      bg="#f4f4f4"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      mb={24}
    >
      <div>
        <ContactUs />
      </div>
      <Flex>
        <Box
          bg="#1E4939"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap
              spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}
              bg={"blue.400"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <WrapItem>
                <Box bg={"blue.400"}>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 8 }}>
                    <VStack
                      id="phone-email"
                      pl={0}
                      spacing={3}
                      alignItems={{ base: "center", md: "flex-start" }}
                    >
                      <Button
                        size="sm"
                        height="fit"
                        width="fit"
                        py={2}
                        //isDisabled
                        variant="ghost"
                        color="white"
                        _hover={{}}
                        cursor="default"
                        leftIcon={<MdPhone color="white" size="20px" />}
                      >
                        +00-010101010
                      </Button>
                      <Button
                        size="sm"
                        height="fit"
                        width="fit"
                        py={2}
                        variant="ghost"
                        color="white"
                        cursor="default"
                        _hover={{}}
                        leftIcon={<MdEmail color="white" size="20px" />}
                      >
                        hello@xactscore.com
                      </Button>
                      <Button
                        size="sm"
                        height="fit"
                        width="fit"
                        py={2}
                        variant="ghost"
                        color="white"
                        cursor="default"
                        _hover={{}}
                        leftIcon={<MdLocationOn color="white" size="20px" />}
                      >
                        City, Country
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-center"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "green.800" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "green.800" }}
                      icon={<BsGithub size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "green.800" }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg" boxShadow={"lg"}>
                  <Box m={8} color="#1E4939">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        {/*<FormLabel>Your Name</FormLabel>*/}
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input
                            type="text"
                            size="md"
                            variant={"flushed"}
                            placeholder="Your Name"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        {/*<FormLabel>Mail</FormLabel>*/}
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input
                            type="text"
                            size="md"
                            variant={"flushed"}
                            placeholder="EMail"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300"
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#1E4939"
                          color="white"
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
