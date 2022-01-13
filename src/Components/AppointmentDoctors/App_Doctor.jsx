import React, { useState } from "react";

const App_Doctor = ({
  type,
  name,
  img,
  degree,
  details1,
  details2,
  details3,
}) => {
  const [degreeToggle, setDegreeTogger] = useState(false);

  const seemoreOrLessHandler = () => {
    setDegreeTogger((prev) => !prev);
  };

  return (
    <div className="px-5 mt-9">
      <div className="shadow-md pb-7 rounded-b-lg">
        <div>
          <img className="rounded-t-lg" src={img} alt="" />
        </div>
        <div className="px-4 mt-4">
          <p className="text-cyan-500">{type}</p>
          <h2 className="text-gray-700 font-medium mt-4 text-2xl mb-2">
            {name}
          </h2>
          <span className="text-sm">
            {degreeToggle ? degree : degree.substr(0, 85)}
          </span>
          {degree.length > 85 ? (
            <span
              className="text-blue-600 ml-1 hover:underline cursor-pointer"
              onClick={seemoreOrLessHandler}
            >
              {degreeToggle ? "see less" : "see more"}
            </span>
          ) : (
            <></>
          )}
          <h3 className="text-md font-medium mt-5">{details1}</h3>
          <h3 className="text-md font-medium">{details2}</h3>
          <h4 className="text-md font-medium">{details3}</h4>
          <button className="px-8 py-3 bg-cyan-500 text-white rounded-lg block mx-auto cursor-pointer mt-7">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
};
export default App_Doctor;
