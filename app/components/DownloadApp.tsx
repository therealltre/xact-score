import React from "react";
import { SimpleGrid, Text, Icon } from "@chakra-ui/react";
import { IoCheckmarkSharp } from "react-icons/io5";

type Props = {};

function Downloadapp({}: Props) {
  return (
    <div>
      <section className="bg-[#1E4939] 2xl:py-24 2xl:bg-white">
        <div className="px-4 mx-auto overflow-hidden bg-[#1E4939] rounded-xl max-w-7xl sm:px-6 lg:px-8">
          <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                  Access your credit score & report with ease{" "}
                </h2>
                <p className="mt-4 mb-12 text-base text-gray-50">
                  Stay up to date and move work forward with XactScore on iOS &
                  Android. Download the app today.
                </p>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                  <Text color={"white"}>
                    <Icon
                      as={IoCheckmarkSharp}
                      color={"white"}
                      w={5}
                      h={5}
                      mr={2}
                    />
                    Weekly update of your credit score & report
                  </Text>
                  <Text color={"white"}>
                    <Icon
                      as={IoCheckmarkSharp}
                      color={"white"}
                      w={5}
                      h={5}
                      mr={2}
                    />
                    Help and support improving your score
                  </Text>
                  <Text color={"white"}>
                    <Icon
                      as={IoCheckmarkSharp}
                      color={"white"}
                      w={5}
                      h={5}
                      mr={2}
                    />
                    Weekly update of your credit score & report
                  </Text>
                </SimpleGrid>

                <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
                  <a href="#" title="" className="flex" role="button">
                    <img
                      className="w-auto h-14"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg"
                      alt=""
                    />
                  </a>

                  <a href="#" title="" className="flex" role="button">
                    <img
                      className="w-auto h-14"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className=" px-12">
                <img
                  className="relative w-full max-w-lg mx-auto -mb-60 lg:-mb-16"
                  src="/downloadapp.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Downloadapp;
