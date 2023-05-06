import {
  Box,
  Container,
  SimpleGrid,
  Button,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={"white"}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box bg="green.50" py={40} id="features">
      <Container maxW={"5xl"} py={4} bg={"green.50"}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={10}
          align={{ base: "center" }}
          justify={"center"}
        >
          <Stack spacing={4}>
            <Heading>Credit Health</Heading>
            <Text color={"gray.500"} fontSize={"lg"}>
              A higher score means you can be eligible for better deals.
            </Text>

            <Text color={"gray.500"} fontSize={"lg"}>
              Your credit score is an overview of your financial history. The
              higher the score, the more open you are to getting a wide range of
              offers.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            >
              <Button
                bg={"#1E4939"}
                rounded={"md"}
                color={"white"}
                height={"48px"}
                _hover={{ bg: "green.700" }}
              >
                Check your credit score
              </Button>
              <Feature
                icon={
                  <Icon
                    as={IoAnalyticsSharp}
                    color={"yellow.500"}
                    w={5}
                    h={5}
                  />
                }
                iconBg={useColorModeValue("yellow.100", "yellow.900")}
                text={"Business Planning"}
              />
              <Feature
                icon={
                  <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"Financial Planning"}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                }
                iconBg={useColorModeValue("purple.100", "purple.900")}
                text={"Market Analysis"}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/app-screen.png"}
              objectFit={"cover"}
              w={"300px"}
              h={"100%"}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
