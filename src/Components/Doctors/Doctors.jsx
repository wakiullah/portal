import React, { useState } from "react";
import doctor1 from "../../images/n0yum0a.jpg";
import doctor2 from "../../images/E7VjZxG.jpg";
import App_Doctor from "../AppointmentDoctors/App_Doctor";

const Doctors = ({ doctors }) => {
  // const [degreeToggle, setDegreeTogger] = useState(false);

  // const seemoreOrLessHandler = () => {
  //   setDegreeTogger((prev) => !prev);
  // };
  // const doctorItem = doctors.map((doc) => (
  //   <div className="px-5 ">
  //     <div className="shadow-xl pb-7 rounded-b-lg">
  //       <div>
  //         <img className="rounded-t-lg" src={doc.img} alt="" />
  //       </div>
  //       <div className="px-4 mt-4">
  //         <p className="text-cyan-500">{doc.category}</p>
  //         <h2 className="text-gray-700 font-medium mt-4 text-2xl mb-2">
  //           {doc.name}
  //         </h2>
  //         <span className="text-sm">
  //           {degreeToggle ? doc.education : doc.education.substr(0, 85)}
  //         </span>
  //         {doc.education.length > 85 ? (
  //           <span
  //             className="text-blue-600 ml-1 hover:underline cursor-pointer"
  //             onClick={seemoreOrLessHandler}
  //           >
  //             {degreeToggle ? "see less" : "see more"}
  //           </span>
  //         ) : (
  //           <></>
  //         )}
  //         <h3 className="text-md font-medium">{doc.department}</h3>
  //         <h3 className="text-md font-medium">{doc.designation} </h3>
  //         <h4 className="text-md font-medium">{doc.hospital}</h4>
  //         <button className="px-8 py-3 bg-cyan-500 text-white rounded-lg block mx-auto cursor-pointer mt-7">
  //           BOOK APPOINTMENT
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // ));

  return (
    <section className="doctors mt-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-4xl text-cyan-500 mb-12">Our Doctors</h3>
        </div>
        <div className="flex mb-20">
          {doctors.map((doc) => (
            <App_Doctor
              type={doc.category}
              name={doc.name}
              img={doc.img}
              degree={doc.education}
              details1={doc.department}
              details2={doc.designation}
              details3={doc.hospital}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Doctors;
