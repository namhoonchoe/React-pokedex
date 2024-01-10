import PokemonCard from "@/components/UI/PokemonCard";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      maxW={"600px"}
      width={"100%"}
      color={"cyan"}
      minH={"100dvh"}
      direction={"column"}
      position={"relative"}
    >
      <Flex
        w={"full"}
        h={20}
        backgroundColor={"#d53b47"}
        alignItems={"flex-end"}
        py={2}
        px={4}
        position={"sticky"}
        top={0}
        zIndex={10}
      >
        <Text
          fontSize="2xl"
          textColor={"white"}
          fontWeight={"bold"}
          textTransform={"capitalize"}
        >
          pokedex
        </Text>
      </Flex>
      <SimpleGrid
        marginTop={10}
        height={"200dvh"}
        columns={2}
        justifyItems={"center"}
        alignItems={"center"}
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <PokemonCard key={index+1} pokemonId={index+1} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
