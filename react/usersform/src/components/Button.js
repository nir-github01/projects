import { type } from "@testing-library/user-event/dist/type";
import React from "react";

function Button({ type, nameValue, width, height, disabled}) {
  return (
    <div className="mr-2 mb-2">
      <button
        type={type}
        width={width}
        height={height}
        className={
          " w-[70%] py-2.5 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-medium  text-center mr-2 mb-2"
        }
        disabled={disabled}
      >
        {nameValue}
      </button>
    </div>
  );
}

export default Button;
