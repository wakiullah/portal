import React from "react";

import firstImg from "../../images/3-1.png";
import secondImg from "../../images/3-2.png";
import thirdImg from "../../images/3-3.png";

const Services = () => {
  return (
    <section className="services mt-24">
      <div className="container mx-auto">
        <div className="text-center">
          <h4 className="text-blue-700 text-2xl uppercase">Our Services</h4>
          <h2 className="text-4xl text-gray-900 font-medium mt-3">
            Services We Provide
          </h2>
        </div>
        <div className="flex mt-12">
          <div className="text-center px-12">
            <div>
              <img className=" w-36 mx-auto h-auto" src={firstImg} alt="img" />
            </div>
            <div>
              <h2 className="text-2xl text-gray-700 font-medium mt-3">
                Upload Medical Report
              </h2>
              <p className="text-base text-gray-600 leading-9 mt-5">
                Upload and save important medical reports in the wrb app. Your
                reports are safely stored and they help the doctors to provide
                you get all kinds of health related services with accurate
                consultation.
              </p>
            </div>
          </div>
          <div className="text-center px-12">
            <div>
              <img className=" w-36 mx-auto h-auto" src={secondImg} alt="img" />
            </div>
            <div>
              <h2 className="text-2xl text-gray-700 font-medium mt-3">
                Upload Medical Report
              </h2>
              <p className="text-base text-gray-600 leading-9 mt-5">
                Upload and save important medical reports in the wrb app. Your
                reports are safely stored and they help the doctors to provide
                you get all kinds of health related services with accurate
                consultation.
              </p>
            </div>
          </div>
          <div className="text-center px-12">
            <div>
              <img className=" w-36 mx-auto h-auto" src={thirdImg} alt="img" />
            </div>
            <div>
              <h2 className="text-2xl text-gray-700 font-medium mt-3">
                Upload Medical Report
              </h2>
              <p className="text-base text-gray-600 leading-9 mt-5">
                Upload and save important medical reports in the wrb app. Your
                reports are safely stored and they help the doctors to provide
                you get all kinds of health related services with accurate
                consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
