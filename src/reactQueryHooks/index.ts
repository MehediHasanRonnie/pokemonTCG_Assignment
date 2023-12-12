import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { useQuery } from "@tanstack/react-query";
import { pokemonData, pokemonDataById } from "@/services/pokemon.services";
import { QueryKeys } from "@/Enums";
import { useRouter } from "next/router";
//code( custome hooks) for network call using react query for all sets..
export const useSets = () => {
  return useQuery<PokemonTCG.Set[]>({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const sets = await pokemonData();
      return sets;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    enabled: true,
    retry: 5,
  });
};
//custom hooks for updating single data..
export const useSet = () => {
  const router = useRouter();
  const id = router.query.setid as string;
  return useQuery<PokemonTCG.Set>({
    queryKey: [QueryKeys.CardSets, id],
    queryFn: async () => {
      const set = await pokemonDataById(id);
      return set;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    enabled: true,
    retry: 5,
  });
};
