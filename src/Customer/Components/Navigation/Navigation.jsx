import { Fragment, useRef, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import '../../../index.css'
// import { IoMdCall } from "react-icons/io";
// import "../../../index.css";
// import Modal from "react-responsive-modal";
// import "react-responsive-modal/styles.css";



const drawbarData = [
  {
    title : "Courses",
    imageUrl : "https://res.cloudinary.com/dheuqshro/image/upload/v1717144263/E-vehicle/Icons/self-improvement_bxibmv.png",
    href : "/courses"
  },
  
  {
    title : "Lab Setup",
    imageUrl : "https://res.cloudinary.com/dheuqshro/image/upload/v1717144263/E-vehicle/Icons/lab_gfpufp.png",
    href : "/lab-setup"
  },

  {
    title : "Spares",
    imageUrl : "https://res.cloudinary.com/dheuqshro/image/upload/v1717144264/E-vehicle/Icons/tyre_kbailj.png",
    href : "/spares"
  },

  {
    title : "Contact Us",
    imageUrl : "https://res.cloudinary.com/dheuqshro/image/upload/v1717144264/E-vehicle/Icons/phone_xzkpfe.png",
    href : "/contact-us"
  },

  {
    title : "Dealership",
    imageUrl : "https://res.cloudinary.com/dheuqshro/image/upload/v1717144264/E-vehicle/Icons/dealership_eusdeh.png",
    href : "/dealership"
  },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  // const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorE1] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto drawbarBg pb-12 shadow-xl">
                <div className="flex justify-end px-4 pb-2 pt-5 noSelect">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 "
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                {/* <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                 
                </Tab.Group> */}

                <div className="space-y-6 border border-t  px-4 py-6 noSelect">
                  <div className=" cursor-pointer text-xl space-y-7 ">
                  
                  {/* Courses */}
                    <a
                      href="/courses"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900  noSelect  "
                    >
                     <img
                     className="h-[2rem] inline mx-4 "
                      src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734323839/self-improvement_bxibmv_qqvnrx.png" alt="" />
                       Courses
                    </a>

                  {/* Dealership */}
                    <a
                      href="/dealership"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 removeBlueHighlight noSelect"
                    >
                      <img 
                      className="h-[2rem] inline mx-4 "
                      src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734323838/dealership_eusdeh_z95rxk.png" alt="" />
                      Dealership
                    </a>
                    
                    {/* Lab Setup */}
                    <a
                      href="/lab-setup"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 removeBlueHighlight noSelect "
                    >
                      <img
                      className="h-[2rem] inline mx-4 " 
                      src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734323839/lab_gfpufp_xyf9ld.png" alt="" />
                      Laboratory Setup
                    </a>

                  {/* Spares */}
                    <a
                      href="/spares"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 removeBlueHighlight noSelect"
                    >
                      <img 
                      className="h-[2rem] inline mx-4 "
                      src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734323839/tyre_kbailj_snk7x3.png" alt="" />
                      Spares
                    </a>

                  {/* Gallery */}
                    <a
                      href="/gallery"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 removeBlueHighlight noSelect"
                    >
                      <img 
                      className="h-[2rem] inline mx-4 "
                      src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734323839/gallery_uifmpj_rkunua.png" alt="" />
                      Gallery
                    </a>

                  {/* Contact Us */}
                    <a
                      href="/contact-us"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 removeBlueHighlight noSelect"
                    >
                      <img 
                      className="h-[2rem] inline mx-4 "
                      src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734323839/phone_xzkpfe_nil0bu.png" alt="" />
                      Contact Us
                    </a>

                  {/* About Us */}
                    <a
                      href="/about-us"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 removeBlueHighlight noSelect"
                    >
                      <img 
                      className="h-[2rem] inline mx-4 "
                      src="https://res.cloudinary.com/dxorxllhb/image/upload/v1734341092/User_Multiple_eda1pv.png" alt="" />
                      About Us
                    </a>


                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        {/* px-4 sm:px-6 lg:px-8 */}
        <nav
          aria-label="Top"
          className="mx-auto w-full border-b border-gray-200"
        >
          <div className="  w-full ">
            <div className="flex h-16 items-center noSelect">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon
                  className="h-6 w-6 sm:h-8 sm:w-8 "
                  aria-hidden="true"
                />
              </button>

              {/* Logo */}
              <div
                className={`flex justify-between  lg:w-max w-full
                  items-center p-2`}
              >
                <div className="flex removeBlueHighlight cursor-pointer">
                  <span onClick={() => navigate("/")}>
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-[9rem] -ml-8 sm:h-[10rem] lg:h-[12rem]  w-auto"
                      src="https://res.cloudinary.com/dheuqshro/image/upload/v1716893212/E-vehicle/Logo/GT_E-mobility_origin_svlego.png"
                      alt=""
                    />
                  </span>
                </div>

               
                  
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10"></Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
                  
                    <div>
                      {pathname !== "/courses" && <Button
                        className="text-xs sm:text-2xl font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/courses")}
                      >
                        Courses
                      </Button>}

                  {pathname !== "/lab-setup" &&    <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/lab-setup")}
                      >
                        Laboratory Setup
                      </Button>}

                      {pathname !== "/spares" &&  <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/spares")}
                      >
                        Spares
                      </Button>}


            {pathname !== "/dealership" &&          <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/dealership")}
                      >
                        Dealership
                      </Button>}

            {pathname !== "/gallery" &&          <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/gallery")}
                      >
                        Gallery
                      </Button>}

              {pathname !== "/contact-us" &&        <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/contact-us")}
                      >
                        Contact Us
                      </Button>}

              {pathname !== "/about-us" &&        <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/about-us")}
                      >
                        About Us
                      </Button>}

                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
