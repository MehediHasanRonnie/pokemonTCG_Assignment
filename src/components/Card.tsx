import { useSets } from "@/reactQueryHooks";
import Image from "next/image";
import { EditSVG } from "./EditSVG";
import EditNameModal from "./EditNameModal";

const PokemonCard = () => {
  const pokeData = useSets();

  return (
    <div className=" py-20 grid grid-cols-4">
      {pokeData.data?.map((item, index) => {
        return (
          <div
            key={index}
            className="max-w-sm p-6 m-5 bg-slate-100 border border-gray-200 rounded-md shadow-lg"
          >
            <div className="relative flex justify-center items-center w-[200px] h-[150px]">
              <Image src={item.images?.logo} alt={"images"} fill />
            </div>
            <div className=" ml-3 mb-3 overflow-y-auto">
              <div className="flex w-[200px]">
                <h2
                  className=" mt-2 font-semibold"
                  // onClick={() => updateName({ setid: x.id, setName: "abc" })}
                >
                  Name: {item.name}
                </h2>
                <EditNameModal items={item.name} />
              </div>
              <h3>Series: {item.series}</h3>
              <h3>Update: {item.updatedAt}</h3>
              <h3>Printed Total:{item.printedTotal}</h3>
              <h3>Total: {item.total}</h3>
              <h3>Release Date: {item.releaseDate}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PokemonCard;
