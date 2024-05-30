import React from "react";
import { deliverables, promotions, perks, vehicles, termsAndConditions, documentsRequired } from "../../Data/Dealership";
import "../../index.css"
import HomeSectionCard from "../Components/HomeSectionCard/HomeSectionCard";
import ReachUs from "../Components/ReachUs/ReachUs";

const DealershipPage = () => {
  return (
    <div>
      {/* Deliverables */}
      <div className="w-full p-4 shadow-lg bg-slate-100">
        <h1 className="text-xl md:text-2xl text-center font-PaytoneOne">
          Details Of Deliverables
        </h1>

        <div className="sm:grid sm:grid-cols-2 sm:gap-1 md:p-4 md:gap-1  lg:grid-cols-3">
          {deliverables.map((item) => (
            <div className="sm:max-w-sm w-full flex flex-col items-center space-y-3 my-5   p-3 rounded-md shadow-md border border-t-orange-500 border-t-2">
              <div>
                <h1 className="font-semibold">Item Type</h1>
                <p>{item.itemType}</p>
              </div>

              <div className="flex space-x-20 justify-between ">
                <div>
                  <h1 className="font-semibold">Item Description</h1>
                  <div>
                    {item.itemDescription.map((info) => (
                      <p>{info}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h1 className="font-semibold">Quantity</h1>
                  <div>
                    {item.quantity.map((quant) => (
                      <p>{quant}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p>TOTAL INVESTMENT BY DEALER: ₹ <span className="text-green-500 font-semibold" >16,00,000</span>/-</p>
          <p>TOTAL SPACE REQUIRED: 1000 sq. ft.</p>
        </div>

      </div>

      {/* Promotion */}
      <div className="p-5 my-10" >
        <h1 className="font-PaytoneOne text-xl sm:text-2xl" >PROMOTION PLAN OF <span className="customunderline2" >DEALERSHIP</span> BY GT E-Mobility</h1>

        <div className="mt-5" >
          <ul className="list-disc mx-4 space-y-2 sm:text-lg" >
            {promotions.map((item) => <li>{item}</li>)}
          </ul>
        </div>
      </div>

      {/* Perks */}
      <div className="p-5 my-10" >
        <h1 className="font-PaytoneOne text-xl sm:text-2xl" ><span className="customunderline2" >PERKS</span>  OF GT E-Mobility DEALERSHIPS</h1>

        <div className="mt-5" >
          <ul className="list-disc mx-4 space-y-2 sm:text-lg" >
            {perks.map((item) => <li>{item}</li>)}
          </ul>
        </div>
      </div>

      {/* Vehicle Details */}
      <div className="p-5 my-10" >
        <h1 className="font-PaytoneOne text-xl sm:text-2xl" >Vehicle Types and Models  </h1>
        <div className="my-10 space-y-5  " >
            {vehicles.map((item) => 
              
              <div className="border p-5  " >
                  <h1 className="text-center font-PaytoneOne text-lg sm:text-2xl " >{item.vehicleType} Model</h1>

                  <div className="space-y-8 mt-6 md:grid md:grid-cols-2 justify-center items-center" >
                      {item.models.map((model) => 
                        
                        <div className="space-y-2 md:space-y-0">
                            <h1 className="text-red-500 font-bold sm:text-xl" > <span className="font-bold text-black " >{model.index} </span  > <span className="ml-10">{model.title}</span> </h1>
                            <HomeSectionCard product={model} />
                        </div>

                      )}
                  </div>
              </div>

            )}
        </div>
        <p className="my-2 text-sm"><b>Note : </b> Price of vehicle varies accrding to the specifications  </p>
       <p className="px-4 py-2 w-max transition-all duration-300 ease-in text-white bg-blue-600 rounded-md text-lg my-4 cursor-pointer hover:scale-95">
        <a target="_blank" href="https://drive.google.com/file/d/1Ho5Api4m0L2qfG3LVnN5PaNU9AZ-N-3I/view?usp=sharing"  >Checkout Specifications</a>
        </p>
      </div>
{/*  */}
      {/* Terms & Conditions */}
      <div className="p-5 my-10" >
        <h1 className="font-PaytoneOne text-xl sm:text-2xl" ><span className="md:customunderline2" >TERMS AND CONDITIONS</span>   FOR DEALERSHIP OF GT E-Mobility</h1>

        <div className="mt-5" >
          <ul className="list-decimal mx-4 space-y-2 sm:text-lg" >
            {termsAndConditions.map((item) => <li>{item}</li>)}
          </ul>
        </div>
      </div>

      {/* Documents Required */}
      <div className="p-5 my-10" >
        <h1 className="font-PaytoneOne text-xl sm:text-2xl underline" >   Documents Required from Dealer:</h1>

        <div className="mt-5" >
          <ul className="list-decimal mx-4 space-y-2 sm:text-lg" >
            {documentsRequired.map((item) => <li>{item}</li>)}
          </ul>
        </div>
      </div>

      {/* Reach Us */}
      <ReachUs/>
    </div>
  );
};

export default DealershipPage;
