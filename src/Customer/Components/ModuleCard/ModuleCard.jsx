import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";

const ModuleCard = ({module}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-white shadow-lg ">
      {/* Outside */}
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between border p-3 shadow-sm cursor-pointer  "
      >
        <p className="flex justify-center items-center font-bold text-lg  ">
          {" "}
          <GoDotFill className="inline text-blue-700 text-sm mr-5" /> Module{" "}
          {module.index} - {module.title}{" "}
        </p>
        <p>
          <FaChevronDown className="inline" />
        </p>
      </div>

      <div className={`ml-5 p-5 ${show ? "" : "hidden"} `}>
        {module.contents.map(
          (content) => (
            // <div className="text-black" > {item.content} </div>

            <ul className="list-disc ml-14 transition-all duration-1000 ease-in-out">
              <li> {content} </li>
            </ul>
          )

          // console.log("Module Content - ", item.content);
        )}
      </div>
    </div>
  );
};

export default ModuleCard;
