import { Box, Center, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

interface DashboardComponentProps {
  label: string;
  text: string;
  labelColor?: string; // Add a new optional prop for label color
}

const DashboardComponent: React.FC<DashboardComponentProps> = ({
  label,
  text,
  labelColor = "black" // Set a default color value if not provided
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      borderLeftWidth="4px" // Add left border width
      borderLeftColor={labelColor} // Set the left border color
    >
      <Text fontSize="xl" fontWeight="semi-bold" color={labelColor}>
        {label}
      </Text>
      <Text fontSize="md" mt="2" fontWeight={"semi-bold"}>
        {text}
      </Text>
    </Box>
  );
};

const ReportOverview: React.FC = () => {
  return (
    <Box p="8">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing="1">
        <DashboardComponent
          label="Low Risk"
          labelColor="red" // Specify color for the first label
          text="Lenders would be confident granting you credit at their most competitive rates"
        />
        <DashboardComponent
          label="Moderate Risk"
          labelColor="orange" // Specify color for the second label
          text="Lenders are less confident in how you may manage your credit and so may not offer all of their products at the best rates"
        />
        <DashboardComponent
          label="High Risk"
          labelColor="green" // Specify color for the third label
          text="Lenders are less confident in how you may manage your credit and so may not offer all of their products at the best rates"
        />
      </SimpleGrid>
    </Box>
  );
};

export default ReportOverview;
