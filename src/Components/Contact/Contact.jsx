import React from "react";

const Contact = () => {
  return (
    <section className="contact bg-slate-900">
      <div className="w-1/2 mx-auto pt-14">
        <div className="text-center">
          <h4 className=" text-lg text-cyan-500 font-medium uppercase">
            Contact
          </h4>
          <h2 className="text-4xl font-medium mt-4 text-gray-300 mb-12">
            Always connect with us
          </h2>
        </div>
        <div>
          <form className="pb-16">
            <input
              placeholder="Email-Address*"
              className="block w-full outline-none text-xl px-4 py-1 rounded-md"
              type="email"
              id=""
            />
            <input
              type="text"
              placeholder="Subject"
              className="block w-full outline-none text-xl px-4 py-1 rounded-md mt-4"
            />
            <textarea className="block w-full outline-none h-40 text-xl px-4 py-1 rounded-md mt-4"></textarea>
            <button
              type="submit"
              className="px-7 py-2 bg-cyan-500 cursor-pointer rounded-sm mx-auto block mt-5"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
