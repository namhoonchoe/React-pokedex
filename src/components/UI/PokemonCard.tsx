import { baseUrl } from "@/components/api";
import useSWR from "swr";


async function getPokemonName(url: string) {
  const response = (await fetch(url)).json()  
   
}

async function getPokemonColor(url: string) {
  const response = (await fetch(url)).json();
   
}

type PokemonProps = {
  pokemonId: number;
};

const PokemonCard: React.FC<PokemonProps> = ({ pokemonId }) => {
  const {
    data: pokemonName,
    error,
    isLoading,
  } = useSWR(`${baseUrl}pokemon/${pokemonId}`, getPokemonName, {
    revalidateOnFocus: false,
  });
  

  return (
   /*  <VStack w={64} h={64} borderRadius={"xl"} backgroundColor={pokemonColor}>
      <Center w={"100%"} h={"85%"}>

      </Center>
      <Center w={"100%"} h={"15%"}>
          <Text>{pokemonName}</Text>
      </Center>
    </VStack> */
    <></>
  );
};

export default PokemonCard;
