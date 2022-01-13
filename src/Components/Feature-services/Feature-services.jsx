import React from "react";
import img from "../../images/featured.png";

const FeatureServices = () => {
  return (
    <section className="feature-services mt-36">
      <div className="container mx-auto flex">
        <div className="w-7/12">
          <h2 className="text-4xl mb-7 font-medium text-gray-700">
            Are You a Specialized Doctor ?
          </h2>
          <p className="text-xl  leading-7 text-gray-700 pr-14">
            Join Our Online Doctors Portal Team and Create your Virtual Chamber.
            Provide Medical Consultancy via video call and expand the reach of
            your service. We have a strong network of Bangladeshi registered
            doctors that you can trust.
          </p>
          <button className="uppercase px-6 py-3 rounded-sm mt-12 bg-cyan-500 text-white">
            singup
          </button>
        </div>

        <div className="w-5/12 ">
          <img className=" w-9/12 ml-auto -mt-12" src={img} alt="" />
        </div>
      </div>
    </section>
  );
};
export default FeatureServices;
