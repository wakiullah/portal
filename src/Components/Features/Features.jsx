import React, { useEffect, useState } from "react";

import fImg1 from "../../images/f-img1.png";
import fImg2 from "../../images/f-img2.png";

const Features = () => {
  const [state, setstate] = useState(true);
  //   const changeImgs = () => {
  //     setstate((prev) => !prev);
  //     console.log(state,'hii');
  //   };

  //   setInterval(changeImgs, 2000);
  let isIntervel;
  useEffect(() => {
    const interval = () => {
      if (!isIntervel) {
        isIntervel = setInterval(changeImgs, 2000);
      }
    };
    interval();
    return () => {
      clearInterval(isIntervel);
    };
  }, [isIntervel]);

  const changeImgs = () => {
    setstate((prev) => !prev);
  };

  return (
    <section className="features bg-green-100 pt-14">
      <div className="container mx-auto text-center">
        <div>
          <h2 className="text-2xl px-6 leading-10">
            Time and distance are no longer a matter of concern. Easily receive
            advice on physical illness or health issues through video calling.
          </h2>
        </div>
        <div className="flex mt-20">
          <div className="w-1/2 pr-5">
            <div className="flex">
              <div>
                <div className="w-14 h-14  grid place-items-center text-4xl rounded-full bg-indigo-900 text-white   ">
                  1
                </div>
              </div>
              <div className="text-left pl-16">
                <h2 className="text-2xl mb-5 text-gray-700">
                  Create Appointments
                </h2>
                <p className="text-gray-600 mb-10">
                  Visit the Online Doctors Portal web app and create your
                  account in less than a minute, and make appointments easily
                  form our specialist doctors.
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <div className="w-14 h-14  grid place-items-center text-4xl rounded-full bg-indigo-900 text-white   ">
                  1
                </div>
              </div>
              <div className="text-left pl-16">
                <h2 className="text-2xl mb-5 text-gray-700">
                  Create Appointments
                </h2>
                <p className="text-gray-600 mb-10">
                  Visit the Online Doctors Portal web app and create your
                  account in less than a minute, and make appointments easily
                  form our specialist doctors.
                </p>
              </div>
            </div>
            <div className="flex">
              <div>
                <div className="w-14 h-14  grid place-items-center text-4xl rounded-full bg-indigo-900 text-white   ">
                  1
                </div>
              </div>
              <div className="text-left pl-16">
                <h2 className="text-2xl mb-5 text-gray-700">
                  Create Appointments
                </h2>
                <p className="text-gray-600 mb-10">
                  Visit the Online Doctors Portal web app and create your
                  account in less than a minute, and make appointments easily
                  form our specialist doctors.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 px-12 -mt-8">
            <img className="duration-500" src={state ? fImg1 : fImg2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
