import { Fragment, useRef, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import { IoMdCall } from "react-icons/io";
// import "../../../index.css";
// import Modal from "react-responsive-modal";
// import "react-responsive-modal/styles.css";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", id: "top", href: `{women/clothing/tops}` },
            { name: "Dresses", id: "women_dress", href: "#" },
            { name: "Women Jeans", id: "women_jeans" },
            { name: "Lengha Choli", id: "lengha_choli" },
            { name: "Sweaters", id: "sweater" },
            { name: "T-Shirts", id: "t-shirt" },
            { name: "Jackets", id: "jacket" },
            { name: "Gouns", id: "gouns" },
            { name: "Sarees", id: "sarees" },
            { name: "Kurtas", id: "kurtas" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "watches" },
            { name: "Wallets", href: "wallets" },
            { name: "Bags", href: "bags" },
            { name: "Sunglasses", href: "sunglasses" },
            { name: "Hats", href: "hats" },
            { name: "Belts", href: "belts" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "/" },
    { name: "Stores", href: "/" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  // const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorE1] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // const onOpenModal = () => setOpenModal(true);
  // const onCloseModel = () => setOpenModal(false);

  // To Manage Submit State
  // const [loading, setLoading] = useState(false);
  // const formRef = useRef(null)

  // const enquiry_info =
  //   pathname === "/product"
  //     ? "Vehicle"
  //     : pathname === "/courses"
  //     ? "Course"
  //     : pathname === "/lab-setup"
  //     ? "Labs"
  //     : "Spares"
  // ;
  // console.log("Enquiry Info ", enquiry_info);
  // Handle Form State
  // const [formData, setFormData] = useState({
  //   Contact_Number : '',
  //   Email : "",
  //   // Enquiry : '',
  //   Updates_On_Whatsapp : '',
  // })

  // const handleInputChange = (e) => {
  //   const {name, value} = e.target;
  //   setFormData({...formData, [name] : value});
  // }

  // const scriptUrl =
  //   "https://script.google.com/macros/s/AKfycbw-ff2NFuERZtAwCX1jjgm6qDWnKBLiXu5C5cWItzXMU0JyfzSsL5aKHUb49BwyVtJx/exec";

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log("Submitting Form On The way", formRef.current);
  //   // setLoading(true);
  //   console.log("Form Values ", formData);
  //   const data = new FormData();
  //   data.append("Contact_Number", formData.Contact_Number);
  //   data.append("Email", formData.Email);
  //   // data.append("Enquiry", enquiry_info);
  //   data.append("Updates_On_Whatsapp", formData.Updates_On_Whatsapp);

  //   fetch(scriptUrl, {
  //     method: 'POST',
  //     body: data,
  //     // muteHttpExceptions: true,
  // }).then(res => {
  //         console.log("SUCCESSFULLY SUBMITTED")
  //         setLoading(false);
  //         alert("We will get back to you soon !");

  //         setFormData({
  //           Contact_Number : '',
  //           Email : '',
  //           Updates_On_Whatsapp : true,
  //         })
  //         onCloseModel();
  //     })
  //     .catch(err => console.log(err))
  // }

  // const handleSubmit = (e) => {
  //   const formElem = document.querySelector("form");
  //   e.preventDefault();
  //   console.log("Submitted...   ");
  //   const formData = new FormData(formElem);
  //   fetch(
  //     "https://script.google.com/macros/s/AKfycbzsVbJoODD1vTyyYHZDxSifa3HA6xN1BNANy-I3SIfXtIr2dO_pHL1j6k_s67ssRaqy/exec",
  //     {
  //       method: "POST",
  //       body: formData,
  //       mode : 'no-cors'
  //     }
  //   )
  //     .then(() => {
  //       console.log("Data Added to sheet successfully ");
  //     })
  //     .catch((error) => {
  //       console.log("Error occured while submitting the data to sheet ", error);
  //     });
  //   onCloseModel();
  // };

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
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
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

                <div className="space-y-6 border  px-4 py-6">
                  <div className="flow-root cursor-pointer">
                    <a
                      href="/courses"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900  "
                    >
                      Courses
                    </a>
                    <a
                      href="/lab-setup"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 "
                    >
                      Lab Setup
                    </a>
                    <a
                      href="/spares"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 "
                    >
                      Spares
                    </a>
                    <a
                      href="/contact-us"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 "
                    >
                      Contact Us
                    </a>

                    <a
                      href="/dealership"
                      className="-m-2 block p-2 sm:text-lg font-medium text-gray-900 "
                    >
                      Dealership
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
            <div className="flex h-16 items-center">
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
                className={`flex justify-between  ${
                  pathname != "/" ? "w-full" : "lg:w-max w-full"
                }   items-center p-2`}
              >
                <div className="flex ">
                  <a href="/">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-[9rem] -ml-8 sm:h-[10rem] lg:h-[12rem]  w-auto"
                      src="https://res.cloudinary.com/dheuqshro/image/upload/v1716893212/E-vehicle/Logo/GT_E-mobility_origin_svlego.png"
                      alt=""
                    />
                  </a>
                </div>

                {/* {pathname !== "/" && (
                  <div className="" onClick={onOpenModal}>
                    <p
                      className="callBackbg px-3 py-1 sm:px-6  sm:py-2 cursor-pointer text-white 
                   font-semibold rounded-md sm:text-xl hover:opacity-90"
                    >
                      <IoMdCall className="inline scale-110" /> Request Callback{" "}
                    </p>
                  </div>

                )}

                <Modal
                  open={openModal}
                  onClose={onCloseModel}
                  center
                  closeOnOverlayClick={false}
                  classNames={""}
                >
                  <form
                    className="w-full max-w-sm p-5 form"
                    onSubmit={handleSubmit}
                  >
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                          htmlFor="inline-full-name"
                        >
                          Contact Number
                        </label>
                      </div>
                      <div className="md:w-2/3">
                        <input
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          id="inline-full-name"
                          type="number"
                          placeholder="Enter your number"
                          maxLength={10}
                          name="Contact_Number"
                        />
                      </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                          htmlFor="inline-password"
                        >
                          Email
                        </label>
                      </div>
                      <div className="md:w-2/3">
                        <input
                          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          id="inline-password"
                          type="Email"
                          name="Email"
                          placeholder="Enter email"
                          // onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Enquiry About What ?? */}
                    {/* <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3"></div>
                      <label className="hidden md:w-2/3  text-gray-500 font-bold">
                        <span className="text-sm">Enquiry</span>
                        <input
                          className="hidden mr-2 leading-tight"
                          type="text"
                          value={enquiry_info}
                          name="Enquiry"
                          onChange={handleInputChange}
                        />
                      </label>
                    </div> */}

                    {/* <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3"></div>
                      <label className="md:w-2/3 block text-gray-500 font-bold">
                        <input
                          className="mr-2 leading-tight"
                          type="checkbox"
                          name="Updates_On_Whatsapp"
                          // onChange={handleInputChange}
                        />
                        <span className="text-sm">
                          Send me updates on Whatsapp
                        </span>
                      </label>
                    </div>

                    <div className="md:flex md:items-center">
                      <div className="md:w-1/3"></div>
                      <div className="md:w-2/3 ">
                        <button
                          value={loading ? "Loading..." : "Submitted"}
                          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                  // </Modal> */}

               {pathname !== "/" && <Button
                        className="text-xs border sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/contact-us")}
                      >
                        Contact Us
                      </Button>}

                  
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10"></Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
                  {pathname === "/" && (
                    <div>
                      <Button
                        className="text-xs sm:text-2xl font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/courses")}
                      >
                        Courses
                      </Button>

                      <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/lab-setup")}
                      >
                        Lab Setup
                      </Button>
                      <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/spares")}
                      >
                        Spares
                      </Button>

                      <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/contact-us")}
                      >
                        Contact Us
                      </Button>

                      <Button
                        className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-800"
                        onClick={() => navigate("/dealership")}
                      >
                        Dealership
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
