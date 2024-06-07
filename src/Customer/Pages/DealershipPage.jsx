import React, { useState } from "react";
import {
  deliverables,
  promotions,
  perks,
  vehicles,
  termsAndConditions,
  documentsRequired,
} from "../../Data/Dealership";
import "../../index.css";
import HomeSectionCard from "../Components/HomeSectionCard/HomeSectionCard";
import ReachUs from "../Components/ReachUs/ReachUs";
import Aos from "aos";
import "aos/dist/aos.css";

var pdfLink = "";

const DealershipPage = () => {
  React.useEffect(() => {
    fetchDeliverables();
    fetchPromotionDetails();
    fetchPerks();
    fetchTermsAndConditions();
    fetchDocumentsRequired();
    fetchDealershipVehicles();
    Aos.init({ once: true });
  }, []);

  
  const [deliverablesData, setDeliverablesData] = useState();
  const [promotionData, setPromotionData] = useState();
  const [perksData, setPerksData] = useState();
  const [termsAndConditionsData, setTermsAndConditionsData] = useState();
  const [documentsRequiredData, setDocumentsRequiredData] = useState();
  const [dealershipVehicles, setDealershipVehicles] = useState();

  async function fetchDeliverables() {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Deliverables_Details"
    );

    const data = await res.json();

    setDeliverablesData(data);
  }

  async function fetchPromotionDetails() {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Dealership_Promotion"
    );

    const data = await res.json();

    setPromotionData(data);
  }

  async function fetchPerks() {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Dealership_Perks"
    );

    const data = await res.json();

    setPerksData(data);
  }

  async function fetchTermsAndConditions() {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Dealership_TermsAndConditions"
    );

    const data = await res.json();

    setTermsAndConditionsData(data);
  }

  async function fetchDocumentsRequired() {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Dealership_Documents"
    );

    const data = await res.json();

    setDocumentsRequiredData(data);
  }

  async function fetchDealershipVehicles() {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=Dealership_Vehicle_Details"
    );

    const data = await res.json();

    const groupBy = (array, key) => {
      return array.reduce((result, currentValue) => {
        // Initialize the group if it doesn't exist
        if (!result[currentValue[key]]) {
          result[currentValue[key]] = [];
        }
        // Add the current value to the group
        result[currentValue[key]].push(currentValue);
        return result;
      }, {});
    };
    
  
    // // Debug: Ensure data is not null or undefined
    if (!data || data.length === 0) {
      throw new Error('Input data is null, undefined, or empty.');
    }
    
    const groupedData = groupBy(data, 'vehicleType');
    
    pdfLink = groupedData['Passenger'][0].pdf;

    // // Debug: Log the grouped data to check its structure
    console.log('Grouped Data:', JSON.stringify(groupedData, null, 2));
    
    const transformedData = Object.keys(groupedData).map(vehicleType => ({
      vehicleType: vehicleType,
      models: groupedData[vehicleType].map(({ index, title, imageUrl }) => ({
        index: index.replace(/"/g, ''), // Remove quotes from index
        title: title,
        imageUrl: imageUrl.replace(/"/g, ''),
      }))
    }));
    
    // // Debug: Log the transformed data to check its structure
    // console.log('Transformed Data:', transformedData[0].pdf);
    console.log("Pdf Link = ", pdfLink);

    setDealershipVehicles(transformedData);
  }

  var newData = [];

  const data2 = deliverablesData?.map((data) => {
    const obj = {};
    obj.itemType = data.itemType;
    obj.itemDescription = data.itemDescription.toString().split("+");
    obj.quantity = data.quantity.toString().split("+");
    newData.push(obj);
    // console.log(obj);
    return obj;
  });

 

  // console.log("Promotion Data = ", promotionData);
  // console.log("Perks Data = ", perksData);
  // console.log("Terms And Conditions = ", termsAndConditionsData);
  // console.log("Documents Required = ", documentsRequiredData);
  // console.log("Passenger Models = ", passengerModels);
      // console.log("Dealership pdf = ", dealershipVehicles[0].pdf)

  return (
    <div>
      {/* Deliverables */}
      <div className="w-full p-4 shadow-lg bg-slate-100 ">
        <h1 className="text-xl md:text-2xl text-center font-PaytoneOne">
          Details Of Deliverables
        </h1>

        <div className="sm:grid mx-auto sm:grid-cols-2 sm:gap-1 md:p-4 md:gap-1  lg:grid-cols-3">
          {newData?.map((item) => (
            <div
              data-aos="zoom-in"
              className="sm:max-w-sm w-full flex flex-col items-center space-y-3 my-5   p-3 rounded-md shadow-md border border-t-orange-500 border-t-2"
            >
              <div>
                <h1 className="font-semibold">Item Type</h1>
                <p>{item.itemType}</p>
              </div>

              <div className="flex space-x-20 justify-between ">
                <div>
                  <h1 className="font-semibold">Item Description</h1>
                  <div className="px-4">
                    <ol className="list-decimal ">
                      {item?.itemDescription.map((info) => (
                        <li>{info.replace(/"/g, "")}</li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div>
                  <h1 className="font-semibold">Quantity</h1>
                  <div>
                    {item.quantity.map((quant) => (
                      <p>{quant.replace(/"/g, "")}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p>
            TOTAL INVESTMENT BY DEALER: ₹{" "}
            <span className="text-green-500 font-semibold">16,00,000</span>/-
          </p>
          <p>TOTAL SPACE REQUIRED: 1000 sq. ft.</p>
        </div>
      </div>

      {/* Promotion */}
      <div data-aos="fade-right" className="p-5 my-10">
        <h1 className="font-PaytoneOne text-xl sm:text-2xl">
          PROMOTION PLAN OF <span className="customunderline2">DEALERSHIP</span>{" "}
          BY GT E-Mobility
        </h1>

        <div className="mt-5">
          <ul className="list-disc mx-4 space-y-2 sm:text-lg">
            {promotionData?.map((item) => (
              <li>{item.promotionPlan}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Perks */}
      <div data-aos="fade-left" className="p-5 my-10">
        <h1 className="font-PaytoneOne text-xl sm:text-2xl">
          <span className="customunderline2">PERKS</span> OF GT E-Mobility
          DEALERSHIPS
        </h1>

        <div className="mt-5">
          <ul className="list-disc mx-4 space-y-2 sm:text-lg">
            {perksData?.map((item) => (
              <li>{item.perks}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Vehicle Details */}
      <div className="p-5 my-10">
        <h1 className="font-PaytoneOne text-xl sm:text-2xl">
          Vehicle Types and Models{" "}
        </h1>
        <div className="my-10 space-y-5  ">
          {dealershipVehicles?.map((item) => (
            <div className="border p-5  ">
              <h1 className="text-center font-PaytoneOne text-lg sm:text-2xl ">
                {item.vehicleType} Model
              </h1>

              <div className="space-y-8 mt-6 md:grid md:grid-cols-2 justify-center items-center">
                {item.models.map((model) => (
                  <div className="space-y-2 md:space-y-0">
                    <h1 className="text-red-500 font-bold sm:text-xl">
                      {" "}
                      <span className="font-bold text-black ">
                        {model.index}{" "}
                      </span>{" "}
                      <span className="ml-10">{model.title}</span>{" "}
                    </h1>
                    <HomeSectionCard product={model} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="my-2 text-sm">
          <b>Note : </b> Price of vehicle varies accrding to the specifications{" "}
        </p>
       {pdfLink && <p className="px-4 py-2 w-max transition-all duration-300 ease-in text-white bg-blue-600 rounded-md text-lg my-4 cursor-pointer hover:scale-95">
          <a
            target="_blank"
            href={`${pdfLink}`}
          >
            Checkout Specifications
          </a>
        </p>}
      </div>
      {/*  */}
      {/* Terms & Conditions */}
      <div data-aos="fade-up" className="p-5 my-10">
        <h1 className="font-PaytoneOne text-xl sm:text-2xl">
          <span className="md:customunderline2">TERMS AND CONDITIONS</span> FOR
          DEALERSHIP OF GT E-Mobility
        </h1>

        <div className="mt-5">
          <ul className="list-decimal mx-4 space-y-2 sm:text-lg">
            {termsAndConditionsData?.map((item) => (
              <li>{item.termsAndConditions}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Documents Required */}
      <div data-aos="fade-right" className="p-5 my-10">
        <h1 className="font-PaytoneOne text-xl sm:text-2xl underline">
          {" "}
          Documents Required from Dealer:
        </h1>

        <div
          // data-aos-duration = "1000"
          className="mt-5"
        >
          <ul className="list-decimal mx-4 space-y-2 sm:text-lg">
            {documentsRequiredData?.map((item) => (
              <li>{item.documentsRequired}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Reach Us */}
      <ReachUs />
    </div>
  );
};

export default DealershipPage;
