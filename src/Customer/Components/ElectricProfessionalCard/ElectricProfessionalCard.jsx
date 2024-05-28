import React from "react";

const ElectricProfessionalCard = ({data}) => {
  return (
    <div className="max-w-sm px-3 border-l-4 border-blue-800">
      <h1 className="font-bold text-lg">{data.title}</h1>
      <p className="pb-16">
        {data.content}
      </p>
    </div>
  );
};

export default ElectricProfessionalCard;
