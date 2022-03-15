import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

import Container from "../Layout/Container";
import Settings from "components/Modal/Settings";
import Icons from "../Icons/Icons";
import HowToPlay from "components/Modal/HowToPlay";

function Navbar() {
  const [compName, setCompName] = useState("");
  const [open, setOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const openModalHandler = (name: string) => {
    setCompName(name);
    setOpen(true);
  };

  const closeModalHandler = () => {
    setCompName("");
    setOpen(false);
  };

  return (
    <>
      <Transition.Root show={openNav} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
          onClose={setOpenNav}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="absolute inset-0 transition-opacity" />
            </Transition.Child>
            <div className="pointer-events-none fixed inset-y-0 top-[57px] left-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-expo duration-300 sm:duration-400"
                enterFrom="opacity-0 -translate-x-20"
                enterTo="opacity-100 translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-400"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 -translate-x-20"
              >
                <div className="pointer-events-auto relative w-screen sm:max-w-xs">
                  <div className="relative flex h-full flex-col overflow-y-scroll rounded-md  bg-white py-6 drop-shadow-dense">
                    <Icons.Close
                      className="w-5 absolute right-4 top-5 cursor-pointer"
                      onClick={() => setOpenNav(false)}
                    />
                    <div className="w-full px-4">
                      <h2 className="text-sm font-bold uppercase">
                        Wordle Clone
                      </h2>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-100 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-900"
              enterFrom="opacity-0 translate-y-20"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-900"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-20"
            >
              <div className="relative inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all w-full h-screen">
                <div className="relative mx-auto h-full max-w-lg">
                  <Icons.Close
                    className="w-6 absolute right-3 top-3 cursor-pointer"
                    onClick={closeModalHandler}
                  />
                  {compName === "question" && <HowToPlay />}
                  {compName === "setting" && <Settings />}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="border-b border-gray-300">
        <Container>
          <ul className="h-14 flex justify-between items-center">
            <li className="flex space-x-2">
              <Icons.Menu
                className="w-6 cursor-pointer"
                onClick={() => setOpenNav(true)}
              />
              <Icons.Question
                className="w-6 cursor-pointer"
                onClick={() => openModalHandler("question")}
              />
            </li>
            <li>
              <h1 className="text-xl font-extrabold">Wordle Clone</h1>
            </li>
            <li className="flex space-x-2 items-center">
              <Icons.Chart className="w-6" />
              <Icons.Setting
                className="w-6 cursor-pointer"
                onClick={() => openModalHandler("setting")}
              />
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
}

export default Navbar;
