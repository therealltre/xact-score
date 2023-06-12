import React from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";

type Props = {};

function RiskAmountBalance({}: Props) {
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      maxWidth={"fit"}
      alignItems={"start"}
    >
      <VStack align="start" spacing={2} gap={4}>
        <HStack align="start" spacing={1}>
          <Text fontWeight="semi-bold">Your outstanding balance</Text>
          <Box borderBottom="1px" borderColor="gray.300" width="100%" pb={2} />
          <Text fontWeight="bold" color={"red"}>
            High Risk
          </Text>
        </HStack>
      </VStack>
      <Text>Your current total rolling debt</Text>
    </Box>
  );
}

export default RiskAmountBalance;
