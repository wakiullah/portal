import React from "react";
import bloggerImg from "../../images/reviewer1.png";
const Blog = () => {
  return (
    <section className="blog mt-20 mb-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h4 className=" text-xl text-cyan-500 font-medium uppercase">
            our blog
          </h4>
          <h2 className="text-5xl font-medium mt-4 text-gray-700">
            From Our Blog News
          </h2>
        </div>
        <div className="flex mt-14">
          <div className="w-1/3 mx-4 px-6 rounded-lg shadow-md">
            <div className="flex mt-4">
              <img src={bloggerImg} className="w-16 h-16" alt="" />
              <div className="ml-4 mt-2">
                <p className="text-cyan-500 ">Nabila Sarker</p>
                <p>Rungpur</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl text-gray-800 font-medium mt-6">
                Check at least a doctor in a year for your teeth
              </h3>
              <p className="text-lg leading-7 mt-6 text-gray-700 mb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                placeat totam laborum maiores, esse assumenda porro error natus
                sit ipsam.
              </p>
            </div>
          </div>
          <div className="w-1/3 mx-4 px-6 rounded-lg shadow-md">
            <div className="flex mt-4">
              <img src={bloggerImg} className="w-16 h-16" alt="" />
              <div className="ml-4 mt-2">
                <p className="text-cyan-500 ">Nabila Sarker</p>
                <p>Rungpur</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl text-gray-800 font-medium mt-6">
                Check at least a doctor in a year for your teeth
              </h3>
              <p className="text-lg leading-7 mt-6 text-gray-700 mb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                placeat totam laborum maiores, esse assumenda porro error natus
                sit ipsam.
              </p>
            </div>
          </div>
          <div className="w-1/3 mx-4 px-6 rounded-lg shadow-md ">
            <div className="flex mt-4">
              <img src={bloggerImg} className="w-16 h-16" alt="" />
              <div className="ml-4 mt-2">
                <p className="text-cyan-500 ">Nabila Sarker</p>
                <p>Rungpur</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl text-gray-800 font-medium mt-6">
                Check at least a doctor in a year for your teeth
              </h3>
              <p className="text-lg leading-7 mt-6 text-gray-700 mb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea,
                placeat totam laborum maiores, esse assumenda porro error natus
                sit ipsam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
