import React from 'react'

const ReachUs = () => {
  return (
    <div>
        <div className="sm:p-5 border-t-2 text-center py-3 sm:text-start">
        <p className="text-3xl font-semibold mb-5 tracking-wide">Reach us</p>
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
                customerservice@centurion
              </a>{" "}
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ReachUs