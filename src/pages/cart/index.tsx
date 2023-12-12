import useStore from "@/customhooks/countcart";
import { useSets } from "@/reactQueryHooks";
import { Set } from "pokemon-tcg-sdk-typescript/dist/sdk";
import Image from "next/image";

const CartList = () => {
  const { pokemonId } = useStore();
  const cardSets = useSets();
  const sets = cardSets.data;
  const { removeId, dec } = useStore();

  let findData: Set[] = [];

  pokemonId.forEach((id) => {
    const result = sets?.filter((x) => x.id === id);
    findData.push(...(result as Set[]));
  });

  return (
    <div className="min-h-[760px]">
      <div className="mt-40 px-80">
        {findData?.map((x, index) => (
          <div
            key={index}
            className="grid grid-cols-5 h-32 m-5 border-2 border-gray-200 bg-white shadow-lg "
          >
            <div className="flex justify-center items-center">
              <Image
                src={x.images.logo}
                alt={"images"}
                height={80}
                width={80}
                priority={true}
              />
            </div>
            <div className="flex justify-start items-center col-span-3 pl-5">
              <p>
                <span className="font-bold">Name : </span>
                {x?.name}
              </p>
            </div>

            <div className="flex justify-center items-center">
              <button
                className="fill-white flex justify-center items-center form-button clear w-10 h-10 bg-rose-600 hover:bg-rose-700 transition"
                type="button"
                onClick={() => {
                  dec();
                  removeId(x.id);
                }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                  >
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
