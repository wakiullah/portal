import React from "react";
import locationIcon from "../../images/location.png";
import callIcon from "../../images/phone-call.png";
const Info = () => {
  return (
    <section className="-mt-14">
      <div className="container mx-auto flex">
        <div className="mx-4 rounded-md bg-cyan-500 px-12 py-6 flex">
          <div className="w-2/12 mr-5">
            <img src={locationIcon} alt="" />
          </div>
          <div className="text-white ">
            <h3 className="text-xl">Opening hours</h3>
            <p className="text-md">We are open 7 days</p>
          </div>
        </div>
        <div className="mx-4 rounded-md bg-gray-700 px-12 py-6 flex">
          <div className="w-2/12 mr-5">
            <img src={callIcon} alt="" />
          </div>
          <div className="text-white ">
            <h3 className="text-xl">Opening hours</h3>
            <p className="text-md">We are open 7 days</p>
          </div>
        </div>
        <div className="mx-4 rounded-md bg-cyan-500 px-12 py-6 flex">
          <div className="w-2/12 mr-5">
            <img src={locationIcon} alt="" />
          </div>
          <div className="text-white ">
            <h3 className="text-xl">Opening hours</h3>
            <p className="text-md">We are open 7 days</p>
          </div>
        </div>

        {/* </div>
        <div>
          <div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="map-marker-alt"
              class="svg-inline--fa fa-map-marker-alt fa-w-12 icon mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
              ></path>
            </svg>
          </div>
          <div>
            <h3>Visit our location
House-1, Road 6, Dhaka 1205</h3>
            <p>We are open 7 days</p>
          </div>
        </div>
        <div>
          <div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="phone-alt"
              class="svg-inline--fa fa-phone-alt fa-w-16 icon mr-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
              ></path>
            </svg>
          </div>
          <div>
            <h3>Opening hours</h3>
            <p>We are open 7 days</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default Info;
