import React, { useState } from "react";

import ModuleCard from "../ModuleCard/ModuleCard";

const CourseCard = ({ course }) => {
  //   console.log("Course Info - ", course);
  //   console.log("Module Data - ", course.modules[0].contents);
  const duration = course.duration;
  return (
    <div className="py-10 mx-6">
      <div className="text-2xl sm:text-4xl flex flex-col items-center p-3 py-4">
        <h1 className="">
          {" "}
          <b> {course.courseTitle} Course </b> (offline){" "}
        </h1>
        <h1 className="">
          {" "}
          <b> Syllabus </b>
        </h1>
      </div>

      {/* Syllabus Contents */}
      <div className="max-w-4xl mx-auto  ">
        <div className=" space-y-2 ">
          {course.modules.map((module) => (
            <ModuleCard module={module} />
          ))}
        </div>
      </div>

       {/* Price Details */}
       <div className="flex flex-col items-center text-xl p-5" >
          {/* <p className="bg0"> <span className="font-semibold" >Total Price</span> : ₹10000 (including accommodation)</p>
          <p className="text-start "> <span className="font-semibold" >Duration</span> : 1 month</p> */}
          <table>
              <tr> <p className="bg0"> <span className="font-semibold" >Total Price</span> : <span className="text-green-500 font-semibold" >₹{course.price}</span> (including accommodation)</p></tr>
              <tr><p className="text-start "> <span className="font-semibold" >Duration</span> : <span className="text-green-500 font-semibold" >{duration}</span> {duration > 1 ? "months" : "month"}</p></tr>
              { course?.certificate && <tr><p className="text-start "> <span className="font-semibold" >Certificate</span> : {course?.certificate ? "Yes" : "No"}</p></tr>}
          </table>
       </div>

    </div>
  );
};

export default CourseCard;
