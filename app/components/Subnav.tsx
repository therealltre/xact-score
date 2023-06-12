import {
  Box,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBreakpointValue,
  Flex,
  Grid,
  VStack,
  HStack,
  Heading,
  Center
} from "@chakra-ui/react";

import ScoreReport from "./ScoreReport/ScoreReport";
import CreditSubNav from "./CreditReport/CreditSubNav";
import RiskDescription from "./ScoreReport/RiskDescription";
import RiskAmountBalance from "./ScoreReport/RiskAmountBalance";

const Subnav = () => {
  return (
    <Box p={4}>
      <Tabs
        isLazy
        py={{ base: 2 }}
        px={useBreakpointValue({ base: 4, md: "auto", xl: 48 })}
      >
        <TabList>
          <Tab>Summary</Tab>
          <Tab>Score</Tab>
          <Tab>Credit Report</Tab>
          <Tab>Compare Offers</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>Summary Content</Text>
          </TabPanel>
          {/* score section */}
          <TabPanel>
            <HStack gap={32} align={""} mb={4}>
              <VStack
                maxWidth={"100vh"}
                //justifyItems={"flex-start"}
                align={"start"}
              >
                <Flex>
                  <Heading as="h2" size="lg" mb="2" mt={6}>
                    Understand your score
                  </Heading>
                </Flex>
                <Text>
                  Lenders work out your credit score based on information in
                  your credit report and use it to decide <br /> whether to lend
                  to you and at what interest rate. Here are the factors that
                  can have the biggest impact so you can see what&apos;s
                  affecting your current score and how you might improve it
                </Text>
              </VStack>
              <Center>
                <ScoreReport score={750} />
              </Center>
            </HStack>
            <HStack>
              <VStack maxWidth={"fit"} align={"start"} bg={"#F4F5FA"}>
                <Flex>
                  <Heading as="h3" size="lg" mb="2">
                    How your data influences your score{" "}
                  </Heading>
                </Flex>
                <Text>
                  We&apos;ve rated each of the factors that make up your Xact
                  Score to show you how risky lenders will consider them to be.{" "}
                  <br />
                  This is based on the most recent information supplied to us by
                  lenders, so could be 4-6 weeks old.
                </Text>
                <RiskDescription />
                <RiskAmountBalance />
              </VStack>
            </HStack>
          </TabPanel>
          <TabPanel>
            <CreditSubNav />
            {/* <Text>Credit Report Content</Text> */}
          </TabPanel>
          <TabPanel>
            <Text>Compare Offers Content</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Subnav;
