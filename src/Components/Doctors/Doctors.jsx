import React from "react";
import doctor1 from "../../images/n0yum0a.jpg";
import doctor2 from "../../images/E7VjZxG.jpg";

const Doctors = () => {
  return (
    <section className="doctors mt-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-4xl text-cyan-500 mb-12">Our Doctors</h3>
        </div>
        <div className="flex mb-20">
          <div className="pr-5 ">
            <div className="shadow-xl pb-7 rounded-b-lg">
              <div>
                <img className="rounded-t-lg" src={doctor1} alt="" />
              </div>
              <div className="px-4 mt-4">
                <p className="text-cyan-500">Dentist</p>
                <h2 className="text-gray-700 font-medium mt-4 text-2xl mb-2">
                  Dr. Rasedul Hasan
                </h2>
                <p className="text-sm mb-5">
                  MBBS IN DHAKA MADECAL ,MKSE (medicine)
                </p>
                <h3 className="text-md font-medium">Medical Proffesor</h3>
                <h3 className="text-md font-medium">Teeth and VBrain </h3>
                <h4 className="text-md font-medium">
                  Dinajpur Medical Collage
                </h4>
                <button className="px-8 py-3 bg-cyan-500 text-white rounded-lg block mx-auto cursor-pointer mt-7">
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>
          </div>
          
          <div className="px-5 ">
            <div className="shadow-xl pb-7 rounded-b-lg">
              <div>
                <img className="rounded-t-lg" src={doctor1} alt="" />
              </div>
              <div className="px-4 mt-4">
                <p className="text-cyan-500">Dentist</p>
                <h2 className="text-gray-700 font-medium mt-4 text-2xl mb-2">
                  Dr. Rasedul Hasan
                </h2>
                <p className="text-sm mb-5">
                  MBBS IN DHAKA MADECAL ,MKSE (medicine)
                </p>
                <h3 className="text-md font-medium">Medical Proffesor</h3>
                <h3 className="text-md font-medium">Teeth and VBrain </h3>
                <h4 className="text-md font-medium">
                  Dinajpur Medical Collage
                </h4>
                <button className="px-8 py-3 bg-cyan-500 text-white rounded-lg block mx-auto cursor-pointer mt-7">
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>
          </div>
          
          <div className="pl-5 ">
            <div className="shadow-xl pb-7 rounded-b-lg">
              <div>
                <img className="rounded-t-lg" src={doctor1} alt="" />
              </div>
              <div className="px-4 mt-4">
                <p className="text-cyan-500">Dentist</p>
                <h2 className="text-gray-700 font-medium mt-4 text-2xl mb-2">
                  Dr. Rasedul Hasan
                </h2>
                <p className="text-sm mb-5">
                  MBBS IN DHAKA MADECAL ,MKSE (medicine)
                </p>
                <h3 className="text-md font-medium">Medical Proffesor</h3>
                <h3 className="text-md font-medium">Teeth and VBrain </h3>
                <h4 className="text-md font-medium">
                  Dinajpur Medical Collage
                </h4>
                <button className="px-8 py-3 bg-cyan-500 text-white rounded-lg block mx-auto cursor-pointer mt-7">
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
export default Doctors;
