import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Text,
  Stack
} from "@chakra-ui/react";
import React from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs = [
  {
    question: "What is a credit score?",
    answer:
      "Your credit score is a number out of 1000. It’s based on your credit report, which is a record of how you’ve managed credit in the past. We give you both of these for free, making it as easy as possible for you to start improving it."
  },
  {
    question: "How does billing work?",
    answer:
      "We offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method."
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      " To cancel your We subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing."
  },
  {
    question: "Can I try this platform for free?",
    answer:
      " We offers a free trial of its platform for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged."
  },
  {
    question: "How do I access my reports?",
    answer:
      " Documentation is available on the company's website and can be accessed by logging in to your account. The documentation provides detailed information on how to use the , as well as code examples and other resources."
  },
  {
    question: "How do I contact support?",
    answer:
      "If you need help with the platform or have any other questions, you can contact the company's support team by submitting a support request through the website or by emailing support@xactscore.info."
  }
];

const FAQSection = () => {
  return (
    <Box bg="#f4faf4" py={40} id="faq">
      <Stack
        spacing={4}
        as={Container}
        maxW={"3xl"}
        textAlign={"center"}
        pb={"8"}
      >
        <Text fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"medium"}>
          Frequently Asked Question
        </Text>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Everything you need to know about the product
        </Text>
      </Stack>
      <Container maxW="container.lg" bg={"white"} rounded={"lg"}>
        <Accordion allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box flex="1" textAlign="left" pb={"4"} pt={"4"}>
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={8}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default FAQSection;
