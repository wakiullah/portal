import React from "react";
import quotes from "../../images/quote.png";
import reviewer1 from "../../images/reviewer1.png";
import reviewer2 from "../../images/reviewer1.png";

const Testmonial = () => {
  return (
    <section className="testmonial mt-16 mb-16">
      <div className="container mx-auto">
        <div className="flex justify-between mb-12">
          <div className="w-1/2">
            <h4 className="text-xl text-cyan-500 mb-3 uppercase">Testmonial</h4>
            <h2 className="text-5xl text-gray-700">
              What Our Patients <br /> Says
            </h2>
          </div>
          <div className="w-2/5">
            <img src={quotes} className="w-4/12 left ml-auto" alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 p-6 shadow-md">
            <div>
              <p>
                <q className="leading-7">
                  I saw Dr. Md. Firoj Hossain was able to diagnosis my condition
                  immediately. He and his staff were extremely professional and
                  kind. There was absolutely no wait time. I would highly
                  recommend this practice to anyone looking for a neurologist.
                </q>
              </p>
            </div>
            <div className="flex mt-4">
              <img src={reviewer1} className="w-16 h-16" alt="" />
              <div className="ml-4">
                <p className="text-cyan-500 ">Nabila Sarker</p>
                <p>Rungpur</p>
              </div>
            </div>
          </div>
          <div className="mx-4 p-6 shadow-md">
            <div>
              <p>
                <q className="leading-7">
                  I was extremely impressed with him at my first appointment
                  because he cared! In addition to being a great doctor, he is
                  kind, compassionate and down to earth. I would recommend him
                  to anyone who is suffering from headaches like I was.
                </q>
              </p>
            </div>
            <div className="flex mt-4">
              <img src={reviewer1} className="w-16 h-16" alt="" />
              <div className="ml-4">
                <p className="text-cyan-500 ">Nabila Sarker</p>
                <p>Rungpur</p>
              </div>
            </div>
          </div>
          <div className="ml-4 p-6 shadow-md">
            <div>
              <p>
                <q className="leading-7">
                  I saw Dr. Md. Firoj Hossain was able to diagnosis my condition
                  immediately. He and his staff were extremely professional and
                  kind. There was absolutely no wait time. I would highly
                  recommend this practice to anyone looking for a neurologist.
                </q>
              </p>
            </div>
            <div className="flex mt-4">
              <img src={reviewer1} className="w-16 h-16" alt="" />
              <div className="ml-4">
                <p className="text-cyan-500 ">Nabila Sarker</p>
                <p>Rungpur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testmonial;
