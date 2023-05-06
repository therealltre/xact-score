import {
  Stack,
  SimpleGrid,
  Flex,
  Button,
  Icon,
  Text,
  VStack,
  useBreakpointValue
} from "@chakra-ui/react";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function Hero() {
  return (
    <Flex
      id="hero"
      w={"100%"}
      h={"865px"}
      backgroundImage={"url(/hero-img.png)"}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      justifyContent={"start"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        align={"flex-start"}
        px={useBreakpointValue({ base: 4, md: 8, xl: 48 })}
        bgGradient={"linear(to-r, blackAlpha.100, transparent)"}
      >
        <Stack maxW={"4xl"} align={"flex-start"} spacing={5}>
          <Text
            color={"#1E4939"}
            fontWeight={500}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
          >
            Your credit score & report. <br />
            Always free, forever.
          </Text>
          <Text
            color={"#1E4939"}
            colorScheme=""
            fontWeight={500}
            lineHeight={1.4}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Your financial needs are our <br /> Prime concern
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <Text color={"#1E4939"}>
              <Icon as={IoCheckmarkSharp} color={"#1E4939"} w={5} h={5} />
              Weekly update of your credit score & report
            </Text>
            <Text color={"#1E4939"}>
              <Icon as={IoCheckmarkSharp} color={"#1E4939"} w={5} h={5} />
              Help and support improving your score
            </Text>
            <Text color={"#1E4939"}>
              <Icon as={IoCheckmarkSharp} color={"#1E4939"} w={5} h={5} />
              Weekly update of your credit score & report
            </Text>
          </SimpleGrid>

          <Button
            bg={"#1E4939"}
            rounded={"md"}
            color={"white"}
            height={"48px"}
            variant="outline"
            _hover={{ bg: "green.700" }}
          >
            Check your credit score
          </Button>
        </Stack>
      </VStack>
    </Flex>
  );
}
