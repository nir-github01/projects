import React from "react";

function CheckBox({ termsConditions, label, onChange, name }) {
  return (
    <div>
      <div className="flex items-center justify-center mr-2 mb-2">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          name={name}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={onChange}

        />
        <label
          htmlFor="link-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}{" "}
          <a
            className="text-blue-600 dark:text-blue-500 hover:underline"
          >
            {termsConditions}
          </a>
        </label>
      </div>
    </div>
  );
}

export default CheckBox;
