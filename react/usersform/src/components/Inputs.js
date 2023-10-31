import React from "react";

function Input({
  type,
  placeholder,
  className,
  labelClass,
  name,
  id,
  value,
  label,
  onChange,
  autoComplete,
}) {
  return (
    <>
      <div className="mb-4 ">
        <label
          htmlFor={id}
          className={
            "block mb-2 text-sm font-medium text-blue-900 dark:text-white"
          }
        >
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={name}
          className={
            " bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[70%] p-2.5 dark:bg-blue-700 dark:border-blue-600 dark:placeholder-blue-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          }
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      </div>
    </>
  );
}

export default Input;
