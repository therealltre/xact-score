import { Box, Center, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

interface DashboardComponentProps {
  label: string;
  value: number;
}

const DashboardComponent: React.FC<DashboardComponentProps> = ({
  label,
  value
}) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" shadow="md">
      <Text fontSize="xl" fontWeight="semi-bold">
        {label}
      </Text>
      <Text fontSize="3xl" mt="2" fontWeight={"bold"}>
        {value}
      </Text>
    </Box>
  );
};

const ReportOverview: React.FC = () => {
  return (
    <Box p="8">
      <Center>
        <Heading as="h1" size="xl" mb="8">
          Report Overview
        </Heading>
      </Center>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing="8">
        <DashboardComponent label="New Credit Applications" value={25} />
        <DashboardComponent label="Active Accounts" value={100} />
        <DashboardComponent label="Total Borrowing in GHC" value={50000} />
      </SimpleGrid>
    </Box>
  );
};

export default ReportOverview;
