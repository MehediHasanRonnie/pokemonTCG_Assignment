import { PokemonTCG } from "pokemon-tcg-sdk-typescript";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editSetName } from "@/services/pokemon.services";
import { QueryKeys } from "@/Enums";

export const useUpdateSetName = (initialSets?: PokemonTCG.Set[]) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ setid, setName }: { setid: string; setName: string }) =>
      editSetName(setid, setName),
    onSuccess: (data, variable) => {
      console.log("successful");
      queryClient.setQueryData(
        [QueryKeys.CardSets],
        (initialSets?: PokemonTCG.Set[]) => {
          let foundSet = initialSets?.find((set) => set.id === variable.setid);
          console.log(foundSet, "founded set");
          if (foundSet) {
            foundSet.name = variable.setName;
          }
          return initialSets;
        }
      );
    },
    //QueryClient.invalidateQueries({QueryKeys:[QueryKeys.CardSets]});
    onError: (err) => {
      console.log(err);
    },
  });
};
