import PokiCard from "@/components/PokiCard";

const Homepage = () => {
  return (
    <div>
      <PokiCard />
    </div>
  );
};

export default Homepage;

// import { pokemonData } from "@/services/pokemon.services";
// import Image from "next/image";
// import Link from "next/link";
// import { GetServerSidePropsContext } from "next";
// import { QueryClient, DehydratedState, dehydrate } from "@tanstack/react-query";
// import { QueryKeys } from "@/Enums";
// import { useSets } from "@/reactQueryHooks";
// import { useUpdateSetName } from "@/reactQueryHooks/updateSetName";

// import ModalButton from "../../components/ModalButton";

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ): Promise<{ props: { dehydratedState: DehydratedState } }> => {
//   const queryClient = new QueryClient();
//   await queryClient.prefetchQuery({
//     queryKey: [QueryKeys.CardSets],
//     queryFn: async () => {
//       const sets = await pokemonData();
//       return sets;
//     },
//   });
//   return { props: { dehydratedState: dehydrate(queryClient) } };
// };

// const Homepage = () => {
//   // const { mutate: updateName } = useUpdateSetName();
//   const setObject = useSets();
//   //console.log(setObject);
//   //console.log(sets.dehydratedState.queries);
//   if (!setObject) {
//     return (
//       <div
//         className={`flex min-h-screen flex-col items-center justify-between bg-slate-100 p-24`}
//       >
//         Loading....
//       </div>
//     );
//   }

//   return (
//     <div className=" p-20 gap-y-10 mt-20 grid grid-cols-4 bg-white">
//       {setObject.data?.map((x, index) => {
//         return (
//           <div
//             key={x.id + index}
//             className=" max-w-sm p-6 m-5 bg-slate-100 border border-gray-200 rounded-lg shadow-lg"
//           >
//             <Link href={`/homepage/${x.id}`}>
//               <div className=" flex justify-center items-center w-[150px] h-[100px] ml-7">
//                 <Image
//                   src={x.images.logo}
//                   alt={x.name + "images"}
//                   width={400}
//                   height={400}
//                 />
//               </div>
//             </Link>
//             <div className=" ml-3 mb-3 mt-5 overflow-y-auto">
//               <h2
//                 className=" mt-2 font-bold"
//                 // onClick={() => updateName({ setid: x.id, setName: "abc" })}
//               >
//                 Name: {x.name}
//               </h2>
//               <h3>Series: {x.series}</h3>
//               <h3>Printed Total: {x.printedTotal}</h3>
//               <h3>Release Date: {x.releaseDate}</h3>
//               <ModalButton data={x} />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Homepage;