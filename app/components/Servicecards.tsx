import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { FcComboChart, FcEditImage, FcStatistics } from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      id="services"
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow={"md"}
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default function Servicecards() {
  return (
    <Box p={4} pb={32}>
      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={""}
            icon={<Icon as={FcStatistics} w={10} h={10} />}
            description={"Weekly updates of your credit score and report"}
            href={"#"}
          />
          <Card
            heading={""}
            icon={<Icon as={FcComboChart} w={10} h={10} />}
            description={"Help and support improving your score."}
            href={"#"}
          />

          <Card
            heading={""}
            icon={<Icon as={FcEditImage} w={10} h={10} />}
            description={
              "Personalized, exclusively pre-approved offers just for you"
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
