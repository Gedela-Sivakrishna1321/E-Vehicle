import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full flex justify-center my-5">
      <Oval
        visible={true}
        height="40"
        width="40"
        color="#0CAFFF"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
