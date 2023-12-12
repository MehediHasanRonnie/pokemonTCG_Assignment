import React from "react";
import Image from "next/image";
import useStore from "@/customhooks/countcart";

export default function ModalButton(props: any) {
  const [showModal, setShowModal] = React.useState(false);
  const { inc, addId } = useStore();
  // console.log(props.data);
  const handleClick = () => {
    inc();
    addId(props.data.id);
    setShowModal(false);
  };
  return (
    <>
      <button
        className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-200"
        type="button"
        onClick={() => setShowModal(true)}
      >
        view
      </button>
      {showModal && props.data !== undefined ? (
        <>
          <div className="justify-center bg-gray-700/30 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative w-[400px] h-[450px] p-6">
                  <div className=" py-20">
                    <div className="max-w-sm px-7 mx-5 bg-slate-100 border border-gray-200 rounded-md shadow-lg">
                      <div className="relative flex justify-center items-center w-auto h-[150px]">
                        <Image
                          src={props.data.images?.logo}
                          alt={"images"}
                          fill
                        />
                      </div>
                      <div className=" ml-3 mb-3 overflow-y-auto">
                        <h2 className="text-xl mt-2 font-bold">
                          Name: {props.data.name}
                        </h2>
                        <h3>Series: {props.data.series}</h3>
                        <h3>Update: {props.data.updatedAt}</h3>
                        <h3>Printed Total:{props.data.printedTotal}</h3>
                        <h3>Total: {props.data.total}</h3>
                        <h3>Release Date: {props.data.releaseDate}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-200"
                    type="button"
                    onClick={handleClick}
                  >
                    add to carts
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
