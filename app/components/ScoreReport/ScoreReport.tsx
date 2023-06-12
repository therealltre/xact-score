import { Box, Text } from "@chakra-ui/react";
import RiskDescription from "./RiskDescription";

const CreditScoreMeter = ({ score }: { score: number }) => {
  const getMeterColor = (score: number) => {
    if (score === 850) {
      return "green";
    } else if (score >= 800) {
      return "green";
    } else if (score >= 700) {
      return "limegreen";
    } else if (score >= 600) {
      return "yellow";
    } else if (score >= 500) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <Box>
      <Box position="relative" width="200px" height="200px">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <path
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="10"
            d="M50,10 A40,40 0 1,1 10,50"
          />
          <path
            fill="none"
            stroke={getMeterColor(score)}
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            d={`M50,10 A40,40 0 ${score > 500 ? 1 : 0},1 ${
              Math.cos((score * Math.PI) / 100 - Math.PI / 2) * 40 + 50
            },${Math.sin((score * Math.PI) / 100 - Math.PI / 2) * 40 + 50}`}
          />
        </svg>
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          fontSize="24px"
          fontWeight="bold"
        >
          {score}
        </Text>
      </Box>
    </Box>
  );
};

export default CreditScoreMeter;
