import {
  Box,
  Flex,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  useBreakpointValue,
  Tabs
} from "@chakra-ui/react";
import ReportOverview from "./ReportOverview";

const SubTabComponent = () => {
  return (
    <Box p={4}>
      <Flex justifyContent="center">
        <Tabs
          //colorScheme="white"
          //bg="gray.100"
          isLazy
          py={{ base: 2 }}
          px={useBreakpointValue({ base: 4, md: "auto", xl: 48 })}
        >
          <TabList>
            <Tab>Report Overview</Tab>
            <Tab>Activity</Tab>
            <Tab>Your Details</Tab>
            <Tab>Credit Accounts</Tab>
            <Tab>Connections</Tab>
            <Tab>Queries & Disputes</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ReportOverview />
            </TabPanel>
            <TabPanel>
              <Text>Content for Activity</Text>
            </TabPanel>
            <TabPanel>
              <Text>Content for Your Details</Text>
            </TabPanel>
            <TabPanel>
              <Text>Content for Credit Accounts</Text>
            </TabPanel>
            <TabPanel>
              <Text>Content for Connections</Text>
            </TabPanel>
            <TabPanel>
              <Text>Content for Queries & Disputes</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default SubTabComponent;
