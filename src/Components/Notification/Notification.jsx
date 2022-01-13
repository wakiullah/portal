import React from "react";

const Notification = ({ notice, type }) => {
  const className =
    type === "error"
      ? "Notification bg-red-800 text-white"
      : "Notification bg-green-400 text-white";

  return (
    <div className={className}>
      <p className="text-center">{notice}</p>
    </div>
  );
};
export default Notification;
