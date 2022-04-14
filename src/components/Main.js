import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import NormalCard from "./NormalCard";
import PhotoCard from "./PhotoCard";

const Main = ({
  results,
  indiaResults,
  entertainmentResults,
  sportsResults,
  politicsResult,
  isDark,
  headlines,
}) => {
  return (
    <Box marginTop={50} display="flex" gap={8}>
      <VStack minw={800} maxW={1000} gap={10}>
        <Text fontSize="4xl">{headlines}</Text>
        {results != null
          ? results.map((item) => {
              return (
                <PhotoCard
                  title={item.title}
                  imageURL={item.image}
                  url={item.url}
                  publishedAt={item.published_date}
                  description={item.description}
                  isDark={isDark}
                />
              );
            })
          : ""}
      </VStack>
      <Box>
        <VStack marginBottom={34}>
          <Text fontSize="2xl" marginBlock={22}>
            India News
          </Text>
          {indiaResults != null
            ? indiaResults.map((item) => {
                return (
                  <NormalCard
                    title={item.title}
                    imageURL={item.image}
                    description={item.description}
                    publishedAt={item.published_date}
                    isDark={isDark}
                    url={item.url}
                  />
                );
              })
            : ""}
        </VStack>
        <VStack marginBottom={34}>
          <Text fontSize="2xl" marginBlock={22}>
            Entertainment News
          </Text>
          {entertainmentResults != null
            ? entertainmentResults.map((item) => {
                return (
                  <NormalCard
                    title={item.title}
                    imageURL={item.image}
                    description={item.description}
                    publishedAt={item.published_date}
                    isDark={isDark}
                    url={item.url}
                  />
                );
              })
            : ""}
        </VStack>
        <VStack marginBottom={34}>
          <Text fontSize="2xl" marginBlock={22}>
            Sports News
          </Text>
          {sportsResults != null
            ? sportsResults.map((item) => {
                return (
                  <NormalCard
                    title={item.title}
                    imageURL={item.image}
                    description={item.description}
                    publishedAt={item.published_date}
                    isDark={isDark}
                    url={item.url}
                  />
                );
              })
            : ""}
        </VStack>
        <VStack>
          <Text fontSize="2xl" marginBlock={22}>
            Business News
          </Text>
          {politicsResult != null
            ? politicsResult.map((item) => {
                return (
                  <NormalCard
                    title={item.title}
                    imageURL={item.image}
                    description={item.description}
                    publishedAt={item.published_date}
                    isDark={isDark}
                    url={item.url}
                  />
                );
              })
            : ""}
        </VStack>
      </Box>
    </Box>
  );
};

export default Main;
