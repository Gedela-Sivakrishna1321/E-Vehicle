import React, { useState } from 'react'
import { IoMdCall } from "react-icons/io";
import "../../../index.css";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const ReachUs = () => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const onOpenModal = () => setOpenModal(true);
  const onCloseModel = () => setOpenModal(false);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbzsVbJoODD1vTyyYHZDxSifa3HA6xN1BNANy-I3SIfXtIr2dO_pHL1j6k_s67ssRaqy/exec";


  const handleSubmit = (e) => {
    e.preventDefault();
    const formElem = document.forms['form'];
    console.log("Submiting the form data to google sheets ....   ");
    const formData = new FormData(formElem);
    fetch(
      scriptUrl,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        console.log("Response  :  ", response);
      })
      .catch((error) => {
        console.log("Error occured while submitting the data to sheet ", error);
      });
    onCloseModel();
  };

  return (
    <div>
        <div className="sm:p-5 border-t-2 text-center py-3 sm:text-start space-y-1">
        <p className="text-3xl font-semibold mb-5 tracking-wide">Reach us</p>

       <div className='sm:flex justify-between'>

        <div className="flex flex-col gap-y-2 ">

          <div className="flex w-full justify-center sm:justify-start ">
            <span className="flex items-center ">
              <img
                className='h-7 w-7'
                src="https://cdn.bajajauto.com/-/media/assets/bajajauto/global/footer-icons/icon-phone.png"
                alt=""
              />{" "}
              <span className="text-sm ml-2 sm:text-lg">Call:</span>{" "}
              <a href="tel:+91 9439075789" className="ml-5">
                {" "}
                <span className="text-blue-400">+91 9439075789 </span>
                <span className="ml-2 text-xs"> (9 AM to 9 PM)</span>
              </a>
            </span>
          </div>

          <div className="flex w-full justify-center sm:justify-start">
            <span className="flex">
              <img
                className='h-7 w-7'
                src="https://cdn.bajajauto.com/-/media/assets/bajajauto/global/footer-icons/icon-envelope.png"
                alt=""
              />{" "}
              <span className="text-sm sm:text-lg ml-2 ">Write:</span>{" "}
              <a href="" className="ml-5 text-blue-500">
                gtemobility.info@gmail.com
              </a>{" "}
            </span>
          </div>

        </div>

        <div className="flex justify-center my-3" >
                    <a href='https://forms.gle/BBMy4gsSUpzhbNdq8' target='_blank'
                      className="callBackbg px-3 py-1 sm:px-6  sm:py-2 cursor-pointer text-white 
                   font-semibold rounded-md sm:text-xl hover:opacity-90 w-max  "
                    >
                      <IoMdCall className="inline scale-110 " /> Request Callback{" "}
                    </a>
        </div>

       </div>


        <Modal
                  open={openModal}
                  onClose={onCloseModel}
                  center
                  closeOnOverlayClick={false}
                  classNames={""}
                >
                  <form
                    name='form'
                    className="w-full max-w-sm p-5"
                    onSubmit={handleSubmit}
                    method='post'
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

                    <div className="md:flex md:items-center mb-6">
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
                          value={loading ? "Submitting..." : "Submitted"}
                          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </Modal>

      </div>
    </div>
  )
}

export default ReachUs