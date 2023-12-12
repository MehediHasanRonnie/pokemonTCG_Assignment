import { pokemonDataById, pokemonData } from "@/services/pokemon.services";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { QueryKeys } from "@/Enums";
import { useSet } from "@/reactQueryHooks";
import useStore from "@/customhooks/countcart";
//import { useUpdateSetName } from "@/reactQueryHooks/updateSetName";
import EditNameModal from "@/components/EditNameModal";

export const getStaticPaths: GetStaticPaths = async (qry) => {
  const data = await pokemonData();

  const tempPaths: { params: { setid: string } }[] = data.map((x) => {
    return { params: { setid: x.id } };
  });

  return {
    paths: tempPaths.splice(0, 5),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.CardSets],
    queryFn: async () => {
      const sets = await pokemonDataById(context.params?.setid as string);
      return sets;
    },
  });
  return { props: { dehydratedState: dehydrate(queryClient) }, revalidate: 10 };
};

const SetDataByID = (props: any) => {
  //const { mutate: updateName } = useUpdateSetName();
  const { data } = useSet();
  const { inc, addId } = useStore();
  // console.log(props.data);
  const handleClick = () => {
    inc();
    addId(props.data?.id);
  };

  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!data)
    return (
      <>
        <div
          className={`flex min-h-screen flex-col items-center justify-between bg-white p-24`}
        >
          <h2>Loading...</h2>
        </div>
      </>
    );
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center bg-white p-24`}
    >
      <div className="max-w-sm p-6 m-5 bg-slate-100 border border-gray-200 rounded-lg shadow">
        <div className="relative flex justify-center w-[200px] h-[150px]">
          <Image src={data.images?.logo} alt={data.name + "images"} fill />
        </div>
        <div className=" ml-3 mb-3 overflow-y-auto">
          <h2 className=" mt-2 font-bold">Name: {data.name}</h2>

          <h3>Series: {data.series}</h3>
          <h3>Update: {data.updatedAt}</h3>
          <h3>Printed Total: {data.printedTotal}</h3>
          <h3>Release Date: {data.releaseDate}</h3>
        </div>
        <button
          className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-200"
          type="button"
          onClick={handleClick}
        >
          add to carts
        </button>
      </div>
    </div>
  );
};
export default SetDataByID;
