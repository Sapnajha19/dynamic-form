import React, { useState } from "react";

function RadioButton() {
  const [radio, setRadio] = useState([]);
  const handleAddFormField = () => {
    setRadio([
      ...radio,
      <input
        type="radio"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
      />,
    ]);
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between gap-4">
        <input
          defaultValue="Add a label"
          className="bg-none text-black outline-none"
        />
        <button
          className="bg-purple-100 text-purple-900 text-sm font-bold w-20 p-1 rounded-md"
          onClick={handleAddFormField}
        >
          Add more
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-4 items-center">
          <input
            type="radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
          />
          <input defaultValue="option 1" className="bg-none outline-none" />
        </div>
        {radio.map((radio, index) => (
          <div key={index} className="flex flex-row gap-4 items-center">
            {radio}
            <input
              type="text"
              defaultValue="option 1"
              className="bg-none outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioButton;
