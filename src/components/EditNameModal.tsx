import { useUpdateSetName } from "@/reactQueryHooks/updateSetName";
import { Dialog, Transition } from "@headlessui/react";
import { FormEvent, Fragment, useState } from "react";
import { EditSVG } from "./EditSVG";

const EditNameModal = (props: any) => {
  const [editOpen, setEditOpen] = useState(false);
  const [editedName, setEditedName] = useState("");
  const { mutate: updateName } = useUpdateSetName();

  const handleEditOpen = () => setEditOpen(!editOpen);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditedName("");
  };
  return (
    <div>
      <button
        className=" ml-2 mb-2 mt-3 bg-blue-700 h-5 w-5 rounded flex justify-center items-center"
        onClick={handleEditOpen}
      >
        <EditSVG />
      </button>
      <Transition.Root show={editOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-5"
          onClose={setEditOpen}
          open={editOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-700/50 backdrop-blur-md transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full justify-center p-4 text-center items-center">
              <Transition.Child
                as={Fragment}
                enter="duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="duration-300"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all flex justify-center my-8">
                  <form action="" className="grid" onSubmit={handleSubmit}>
                    <div className="bg-white px-4 pb-4 pt-5 p-6">
                      <div className="mt-3 mx-5">
                        <Dialog.Title
                          as="h3"
                          className="text-center font-semibold text-gray-900"
                        >
                          Edit Name
                        </Dialog.Title>
                        <div className="mt-2">
                          <input
                            className="outline-1 focus:outline-blue-700  border-2 border-gray-500 rounded p-2 w-full"
                            type="text"
                            autoComplete="off"
                            placeholder="Edit Name"
                            value={editedName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 pb-10">
                      <div className="m-auto">
                        <div className="px-10 grid grid-cols-2 w-96">
                          <div className="flex justify-start">
                            <button
                              type="submit"
                              className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-200"
                              onClick={() => {
                                setEditOpen(false);
                                updateName({
                                  setid: props.data?.id!,
                                  setName: editedName,
                                });
                              }}
                            >
                              Submit
                            </button>
                          </div>
                          <div className="flex justify-end">
                            <button
                              type="button"
                              className="py-2.5 px-5 me-2 mb-2 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-200"
                              onClick={() => setEditOpen(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default EditNameModal;
